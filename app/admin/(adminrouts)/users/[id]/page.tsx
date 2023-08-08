import React from 'react';

type Props = {
  params: {
      id: string
  }
}

const AdminPersonPage = ({ params }: Props) => {
  return (
    <div>AdminPersonPage: {params.id}</div>
  )
}

export default AdminPersonPage