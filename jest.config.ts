export default {
  transform: {
    "\\.[jt]sx?$":  [ 'esbuild-jest', {
        sourcemap: true
      }
    ]
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/types/' ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}