import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ProductItem = () => {
  const [name, setName] = useState('')
  const [cat, setCat] = useState('')
  const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [descr, setDescr] = useState('')
  const [brand, setBrand] = useState('')
  const [icon, setIcon] = useState('')
  const [year, setYear] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [picture, setPictures] = useState('')
  const [video, setVideo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    let obj = {
      id: Math.random(),
      name,
      category: cat,
      price: price,
      title,
      description: descr,
      discount: {
        isSale: false,
        percent: 20
      },
      company: {
        brand: brand,
        icon,
        year: year
      },
      rate: 0,
      size: size.split(' '),
      colors: color.split(' '),
      media: {
        pictures: picture.split(' '),
        video: video.split(' ')
      },
      qt: 10
    }

    setName('')
    setCat('')
    setPrice('')
    setTitle('')
    setDescr('')
    setBrand('')
    setIcon('')
    setYear('')
    setSize('')
    setColor('')
    setPictures('')
    setVideo('')
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '90%' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%', paddingBottom: '20px',flexWrap: 'wrap', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{position: 'absolute', top: '31%', display: 'flex', flexDirection: 'column', gap: '20px'}}>
          <div style={{ width: '200px', height: '200px', background: '#c4c4c4', borderRadius: '10px' }}>
          </div>
          <input type="file" />
        </div>
        <TextField onChange={(e) => setName(e.target.value)} value={name} sx={{ width: '40%', marginTop: '240px' }} variant='standard' placeholder='Name' />
        <TextField onChange={(e) => setCat(e.target.value)} value={cat} sx={{ width: '40%', marginTop: '240px' }} variant='standard' placeholder='Price' />
        <TextField onChange={(e) => setTitle(e.target.value)} value={title} sx={{ width: '40%' }} variant='standard' placeholder='Title' />
        <TextField onChange={(e) => setDescr(e.target.value)} value={descr} sx={{ width: '40%' }} variant='standard' placeholder='Description' />
        <TextField onChange={(e) => setPrice(e.target.value)} value={price} sx={{ width: '40%' }} variant='standard' placeholder='Discount (percent)' />
        <TextField onChange={(e) => setColor(e.target.value)} value={color} sx={{ width: '40%' }} variant='standard' placeholder='Colors ex(red, black, yellow)' />
        <TextField onChange={(e) => setBrand(e.target.value)} value={brand} sx={{ width: '40%' }} variant='standard' placeholder='Brand' />
        <TextField onChange={(e) => setIcon(e.target.value)} value={icon} sx={{ width: '40%' }} variant='standard' placeholder='Icon (logo(link))' />
        <TextField onChange={(e) => setYear(e.target.value)} value={year} sx={{ width: '40%' }} variant='standard' placeholder='Year' />
        <TextField onChange={(e) => setSize(e.target.value)} value={size} sx={{ width: '40%' }} variant='standard' placeholder='Size ex(107x234, 127x244)' />
        <TextField onChange={(e) => setPictures(e.target.value)} value={picture} sx={{ width: '40%' }} variant='standard' placeholder='Pictures (link)' />
        <Button type='submit' sx={{ width: '40%', background: '#279574' }} variant='contained'>Add</Button>
      </form>
    </div>
  )
}

export default ProductItem
