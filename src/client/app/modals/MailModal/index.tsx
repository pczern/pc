import React, { StatelessComponent } from 'react'
import Modal from '../../components/Modal'
import Button, { Type } from '../../components/Button'
import { connect } from 'react-redux'
import { hideModal } from '../../../../shared/actions/modals'

type Props = {
  id: string
  ok: () => void
  successful: boolean
}
const MailModal: StatelessComponent<Props> = props => (
  <Modal>
    {props.successful ? (
      <header>
        <h1>Email erfolgreich gesendet</h1>
        <p>Ich werde mich unverzüglich bei Dir melden</p>
      </header>
    ) : (
      <header>
        <h1>Fehler aufgetreten</h1>
        <p>
          Leider konnte die E-Mail nicht gesendet werden, versuche es bitte
          erneut
        </p>
      </header>
    )}
    <footer>
      <Button onClick={props.ok} type={Type.PRIMARY}>
        OK
      </Button>
    </footer>
  </Modal>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  ok: () => dispatch(hideModal(ownProps.id))
})

export default connect(
  null,
  mapDispatchToProps
)(MailModal)
