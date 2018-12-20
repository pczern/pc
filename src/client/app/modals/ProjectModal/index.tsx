import React from 'react'
import Modal from '../../components/Modal'
import Project from '../../data/Project'
import Tag from '../../components/Tag'
import TagList from '../../components/TagList'

import css from './index.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Icon from '../../components/Icon'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

type Props = {
  id: string
  project: Project
}
export default (props: Props) => (
  <Modal id={props.id} className={css.project}>
    <header>
      <h1>{props.project.title}</h1>
      <h2>{props.project.subtitle}</h2>
    </header>
    <div className={css.text}>
      <p>{props.project.description}</p>
      <ul className={css.links}>
        {props.project.demo && (
          <li>
            <a target="_blank" href={props.project.demo}>
              <Icon src={faGlobe} />
              <span>{props.project.demo}</span>
            </a>
          </li>
        )}
        {props.project.repo && (
          <li>
            <a target="_blank" href={props.project.repo}>
              <Icon src={faGithub} />
              <span>{props.project.repo}</span>
            </a>
          </li>
        )}
        {props.project.link && (
          <li>
            <a target="_blank" href={props.project.link}>
              <Icon src={faGlobe} />
              <span>{props.project.link}</span>
            </a>
          </li>
        )}
      </ul>
    </div>
    <footer>
      <TagList>
        {props.project.technologies.map(technology => (
          <Tag>{technology}</Tag>
        ))}
      </TagList>
    </footer>
  </Modal>
)
