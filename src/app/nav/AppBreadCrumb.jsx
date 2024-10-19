import React from 'react'
import { BreadCrumb } from 'primereact/breadcrumb'
import styled from 'styled-components'
import 'primeicons/primeicons.css'

// Styled components for the container
const BreadCrumbContainer = styled.div`
  padding: 0.5%;
  background-color: none; /* #f8f9fa */
  color: #4f5e78;
  font-size: 14px;

  /* Style for spacing between breadcrumb items */
  .p-breadcrumb li {
    margin-right: 1%; /* Adds space between breadcrumb items */
  }

  /* Style the breadcrumb arrow separator */
  svg.p-icon {
    color: #0c66e4; /* Change arrow color */
  }

  /* Optionally adjust for the last item */
  .p-breadcrumb li:last-child {
    margin-right: 0; /* Removes the space after the last item */
  }
`

export const AppBreadCrumb = () => {
  const items = [{ label: 'Board' }]
  const home = { url: 'https://primereact.org', label: 'Projects' }

  return (
    <BreadCrumbContainer>
      <BreadCrumb model={items} home={home} />
    </BreadCrumbContainer>
  )
}
