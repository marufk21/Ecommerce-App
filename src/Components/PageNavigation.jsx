import { Breadcrumb } from 'flowbite-react'
import { AiFillHome } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({ title }) => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <NavLink to="/">
        <Breadcrumb.Item icon={AiFillHome}>Home</Breadcrumb.Item>
      </NavLink>
      <Breadcrumb.Item>{title}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default PageNavigation
