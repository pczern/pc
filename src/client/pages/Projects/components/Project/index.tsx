import React, { StatelessComponent } from 'react'
import { connect } from 'react-redux'
import { showModal } from '../../../../../shared/actions/modals'
import { ModalType } from '../../../../app/modals'
import ProjectType from '../../../../app/data/Project'
import css from './index.scss'

type Props = {
  project: ProjectType
  openProjectModal: any
}
const Project: StatelessComponent<Props> = props => {
  const { project } = props

  return (
    <div onClick={props.openProjectModal(project)} className={css.project}>
      <div className={css.infos}>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a style={{ marginRight: 16 }}>Mehr</a>
        {project.demo && (
          <a target="_blank" href={project.demo}>
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  openProjectModal: project => () => {
    dispatch(
      showModal({
        project,
        type: ModalType.PROJECT
      })
    )
  }
})
export default connect(
  null,
  mapDispatchToProps
)(Project)
