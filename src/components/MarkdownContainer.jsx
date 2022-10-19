import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function MarkdownContainer ({ markdown }) {
  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter style={materialLight} language={language} children={value} />
    }
  }

  return (
    <ReactMarkdown renderers={renderers} children={markdown} className='content' />
  )
}
