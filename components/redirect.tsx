import { Component } from "react"

interface Props { path: string }

export default class Redirect extends Component<Props, Props> {
  constructor({ path }) {
    super({ path })
    this.state = { path }
  }
  componentDidMount() {
    window.location.href = this.state.path
  }
  render() {
    return null
  }
}