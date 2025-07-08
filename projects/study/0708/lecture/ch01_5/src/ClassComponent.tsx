import {Component} from 'react'
import type {FC} from 'react'

export type ClassComponentProps = {
  href: string
  text: string
}

export type ArrowComponentProps = {
  href: string
  text: string
}

const ArrowComponentProps: FC<ArrowComponentProps> = props => {
  const {href, text} = props
  return (
    <li>
      <a href="http://www.google.com" />
      <p>go to Google</p>
    </li>
  )
}
export default class ClassComponent extends Component<ClassComponentProps> {
  render() {
    const {href, text} = this.props
    return (
      <li>
        <a href="http://www.google.com" />
        <p>go to Google</p>
      </li>
    )
  }
}
