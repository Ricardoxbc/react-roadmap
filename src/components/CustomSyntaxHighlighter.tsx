import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export function CustomSystaxHighlighter({ children = '' }) {
  return (
    <SyntaxHighlighter language='typescript' style={docco} customStyle={{ padding: '1em' }}>
      {children}
    </SyntaxHighlighter>
  )
}
