'use client'
import React from 'react'
import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box"
import { grey } from '@mui/material/colors';

const BorderBottom = styled(Box)(() =>({
    borderBottom:`8px solid ${grey[900]}`
}))

export default BorderBottom