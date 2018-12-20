import React from 'react'
import Helmet from 'react-helmet'
import _ from 'lodash'
import Headline from '../../app/components/Headline'
import { connect } from 'react-redux'
import BoxedContainer from '../../app/components/Container/BoxedContainer'
import Page from '../../app/components/Page'
import Subheadline from '../../app/components/Subheadline'
import Api from '../../app/api/mail'
import { showModal } from '../../../shared/actions/modals'
import { ModalType } from '../../app/modals'
import classNames from 'classnames'
import css from './index.scss'

type Props = {
  dispatch: Function
}
type State = {
  name: string
  email: string
  message: string
}

const isEmpty = str => !(str && str.trim() && str.trim().length > 2)

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

class Contact extends React.Component<Props, State> {
  state = {
    name: '',
    email: '',
    message: ''
  }

  handleSend = () => {
    Api.sendMail(
      this.state.email,
      `Eine E-Mail von ${this.state.name}`,
      this.state.message
    )
      .then(() => {
        this.props.dispatch(
          showModal({
            type: ModalType.MAIL,
            successful: true
          })
        )
      })
      .catch(() => {
        this.props.dispatch(
          showModal({
            type: ModalType.MAIL,
            successful: false
          })
        )
      })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.handleSend()
    return false
  }

  isInputValid = () =>
    !(
      isEmpty(this.state.name) ||
      isEmpty(this.state.email) ||
      isEmpty(this.state.message) ||
      !validateEmail(this.state.email)
    )

  isEmailValid = () =>
    !(isEmpty(this.state.email) || !validateEmail(this.state.email))
  isNameValid = () => !isEmpty(this.state.name)
  isMessageValid = () =>
    !isEmpty(this.state.message) && this.state.message.length > 25

  nameChangeDebounce = _.debounce(value => this.setState({ name: value }), 4)
  emailChangeDebounce = _.debounce(value => this.setState({ email: value }), 4)
  messageChangeDebounce = _.debounce(
    value => this.setState({ message: value }),
    4
  )
  handleChange = event => {
    event.persist()
    console.log('name', event.target.name)
    switch (event.target.name) {
      case 'name':
        this.nameChangeDebounce(event.target.value)
        break
      case 'email':
        this.emailChangeDebounce(event.target.value)
        break
      case 'message':
        this.messageChangeDebounce(event.target.value)
        break
      default:
        break
    }
  }

  componentWillUnmount = () => {
    this.nameChangeDebounce.cancel()
    this.emailChangeDebounce.cancel()
    this.messageChangeDebounce.cancel()
  }

  render() {
    console.log(this.isNameValid())
    return (
      <Page>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Kontaktiere Mich | philippczernitzki.me</title>
          <meta
            name="description"
            content="Hey, ich bin Philipp Czernitzki, Fullstack Developer &amp; Consultant.
        Ich entwerfe, plane, entwickle und teste Apps mit Stil. Dabei setzte ich
        auf zukunftssicherer Technologien wie React.js &amp; Android. Durch ein
        unschlagbares Team an meiner Seite, ist es mir möglich immer die
        aktuellesten Technologien einzusetzen sowie das unmögliche Möglich zu
        machen."
          />
        </Helmet>
        <BoxedContainer className={css.container}>
          <Headline center={true}>Kontaktiere Mich</Headline>
          <Subheadline center={true}>Freelancing, Tutoring, Apps</Subheadline>
          <form className={css.form} onSubmit={this.handleSubmit}>
            <input
              name="name"
              tabIndex={1}
              placeholder="Deine Name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              className={classNames({ [css.valid]: this.isNameValid() })}
            />
            <input
              name="email"
              tabIndex={2}
              placeholder="Deine E-Mail"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              className={classNames({ [css.valid]: this.isEmailValid() })}
            />
            <textarea
              name="message"
              tabIndex={3}
              rows={1}
              placeholder="Deine Nachricht"
              value={this.state.message}
              onChange={this.handleChange}
              className={classNames({ [css.valid]: this.isMessageValid() })}
            />
            <button
              tabIndex={4}
              className={css.button}
              type="submit"
              disabled={!this.isInputValid()}
            >
              {this.isInputValid() ? 'Abschicken' : 'Abschicken'}
            </button>
          </form>
          <span className={css.or}>oder hier</span>
          <a href="mailto:philipp.czernitzki@gmail.com?subject=Message">
            <button className={css.button2}>me@philippczernitzki.me</button>
          </a>
        </BoxedContainer>
      </Page>
    )
  }
}

export default connect()(Contact)
