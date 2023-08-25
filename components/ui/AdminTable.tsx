"use client";

import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { fetchToken } from '@/lib/actions';
import { fetchAllUsers } from '@/swrFetch/fetch';

const AdminTable = () => {

  const { data, error, isLoading } = useSWR('/api/getusers', fetchAllUsers);

  return (
    <TableContainer component={Paper} className="">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID</TableCell>
            <TableCell className="tableCell">NAME</TableCell>
            <TableCell className="tableCell">EMAIL</TableCell>
            <TableCell className="tableCell">AVATAR</TableCell>
            <TableCell className="tableCell">ADMIN</TableCell>
            <TableCell className="tableCell">MODER</TableCell>
            <TableCell className="tableCell">Reg.Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((row: any, key: any) => (
            <TableRow
              key={key}
            >
              <TableCell className="tableCell">#{++key}</TableCell>
              <TableCell className="tableCell">{row.node.name}</TableCell>
              <TableCell className="tableCell">{row.node.email}</TableCell>
              <TableCell className="tableCell"><Image className="rounded-full object-cover" src={row.node.avatarUrl} width={40} height={40} alt="avatar" /></TableCell>
              <TableCell className="tableCell">{row.node.isAdmin ? "Да" : "Нет"}</TableCell>
              <TableCell className="tableCell">{row.node.isModer ? "Да" : "Нет"}</TableCell>
              <TableCell className="tableCell">{row.node.regDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AdminTable