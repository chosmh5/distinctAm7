import { Code } from 'react-notion-x'
import FadeInWhenVisible from './FadeInWhenVisible'

export default function CustomCode(props: any) {
  return (
    <FadeInWhenVisible>
      <Code {...props} />
    </FadeInWhenVisible>
  )
}
