import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import axios from 'axios'
import openapiDiff from 'openapi-diff'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const openapiUrl = 'https://api.zapper.fi/api/json'
const localPath = path.resolve(__dirname, '../openapi.json')

const fetchRemoteApi = async () =>
  axios.get(openapiUrl).then(response => response.data)

const diffApiChanges = async () => {
  const source = fs.readFileSync(localPath, 'utf8')
  const destination = await fetchRemoteApi()
  const result = await openapiDiff.diffSpecs({
    sourceSpec: {
      content: source,
      // location: 'source.json',
      format: 'openapi3',
    },
    destinationSpec: {
      content: JSON.stringify(destination),
      // location: 'destination.json',
      format: 'openapi3',
    },
  })

  if (
    result.breakingDifferencesFound ||
    result.nonBreakingDifferences.length ||
    result.unclassifiedDifferences.length
  ) {
    console.log('Api Changes found!\n')
    console.log(JSON.stringify(result, null, 2))
    console.log(`
Result Summary:
    - Breaking Changes Found? ${result.breakingDifferencesFound ? 'Yes' : 'No'}
    - Found ${result.nonBreakingDifferences.length} Non Breaking Changes.
    - Found ${result.unclassifiedDifferences.length} Unclassified Changes.
    `)
    process.exit(-1)
  }

  console.log('No changes found')
}

diffApiChanges()
