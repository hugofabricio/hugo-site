const { readdirSync, writeFileSync } = require('fs')
const path = require('path')

const { isSVG, removeExtension, toPascalCase } = require('./utils')

const packs = [
  {
    filename: 'index',
    dir: path.resolve('src', 'svg', 'vectors')
  },
  {
    filename: 'index',
    dir: path.resolve('src', 'svg', 'animations')
  }
]

const mapFiles = (filename, files, dir) => {
  const package = dir.substring(dir.lastIndexOf('/') + 1)

  const mapContent = [
    files
      .map((file) => `import ${toPascalCase(file)} from './${file}.svg'`)
      .join('\n'),
    '',
    `const ${package} = {`,
    `${files.map((file) => `  '${file}': ${toPascalCase(file)},`).join('\n')}`,
    '}\n',
    `export default ${package}`
  ].join('\n')

  writeFileSync(`${dir}/${filename}.ts`, mapContent)

  console.log(`${filename} created! ✅`)
}

packs.map((pack) => {
  const files = readdirSync(pack.dir).filter(isSVG).map(removeExtension)

  try {
    mapFiles(pack.filename, files, pack.dir)
  } catch (e) {
    console.error(e)
  }
})
