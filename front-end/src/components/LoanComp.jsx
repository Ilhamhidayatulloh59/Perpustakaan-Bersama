import {
    Flex, Box, Text, Button, InputGroup, InputLeftElement, Icon, useDisclosure,
    InputRightElement, Input, Tooltip, useToast, Image,
    Modal, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, ModalContent, Divider
} from '@chakra-ui/react';
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"

export default function CartDetail() {
    const { NIM, email ,isVerified, cart } = useSelector((state) => state.userSlice.value)
    const data = useSelector((state) => state.cartSlice.value);

return (
    <Box>
    <Box display='flex' justifyContent='center' flexWrap={'wrap'}>

    

        <Box minW='370px' w={'55vw'} mx='15px' my='10px' p='25px' px='20px' justifyContent={'center'} boxShadow='md' borderWidth='1px' borderRadius="10px">
        {
            NIM === 0 ?
            <Box align='center'>
                <Image src='https://www.kibrispdr.org/data/1779/gif-pendidikan-4.gif' objectFit='contain' w='400px' h='300px' />
                <Text textAlign='center' fontWeight='bold'>Keranjang anda kosong</Text>
                <Text as={Link} to="/" textAlign='center' fontWeight='bold' color="pink.400" w='150px' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
                Pinjam Sekarang
                </Text>
            </Box>
            :
            // {data.map(item => {
            //     return (
                <>
                <Box boxShadow='sm' borderWidth='1px' borderRadius='10px' mb='20px' p='10px' _hover={{ boxShadow: 'lg' }}>
                <Box mt='5px'>
                    <Text alignSelf='center' fontWeight='semibold' fontSize='sm' mb='5px'>
                    Banyak Buku: {cart} Buku
                    </Text>
                </Box>

                {/* <Box mt='5px'>
                    <Text alignSelf='center' fontWeight='semibold' fontSize='sm' mb='5px'>
                    Pilih Kurir :
                    </Text>
                    <FormControl isInvalid={formik.errors.courier} marginTop={"10px"}>
                    <Select onChange={(event) => formik.setFieldValue("courier", event.target.value)}>
                        <option value="">- Pilih Kurir -</option>
                        {renderCouriers()}
                    </Select>
                    <FormHelperText color="red">
                        {formik.errors.courier}
                    </FormHelperText>
                    </FormControl>
                </Box> */}
                {/* ----- Pilih Service ----- */}
                    {/* <Box mt='10px'>
                        <Text alignSelf='center' fontWeight='semibold' fontSize='sm' mb='5px'>
                        Pilih Service :
                        </Text>
                        <FormControl isInvalid={formik.errors.service} marginTop={"10px"}>
                        <Select onChange={(event) => formik.setFieldValue("service", event.target.value)}>
                            <option value="">- Pilih Service -</option>

                            {formik.values.courier ? renderCostRajaOngkir() : null}
                        </Select>
                        <FormHelperText color="red">
                            {formik.errors.service}
                        </FormHelperText>
                        </FormControl>
                    </Box> */}
                </Box>
                <Box boxShadow='sm' borderWidth='1px' borderRadius='10px' mb='20px' p='10px' _hover={{ boxShadow: 'lg' }}>
                {data.map(item => {
                    return (
                    <>
                    <Flex justifyContent='space-between'>
                        <Box display='flex'>
                        <Box minW='100px' minH='100px' overflow='hidden' borderWidth='1px' >
                            <Link href={`/productdetails/${item.Book.id}`}>
                            <Image objectFit='cover' src={item.Book.Images} width='100px' height='100px' />
                            </Link>
                        </Box>
                        <Box ml='15px' alignSelf="center" >
                            <Link href={`/productdetails/${item.Book.id}`}>
                                <Text fontWeight='semibold'>
                                    {item.Book.Title}
                                </Text>
                                <Text fontWeight='semibold' fontSize="small">
                                    {item.Book.Publisher}
                                </Text>
                                <Text fontWeight='semibold' color='#213360' textColor='#FF6B6B'>
                                    {item.Book.Author}
                                </Text>
                            </Link>
                        </Box>
                        </Box>
                        {/* <Tooltip label='Hapus Produk' fontSize='sm' >
                        <Button variant='link' color="pink.400" size='sm'
                            // onClick={onOpenDelete} 
                            _hover={{ color: "pink" }}>
                            <Icon boxSize={4} as={FaTrashAlt} />
                        </Button>
                        </Tooltip> */}
                    </Flex>
                        <Divider my='20px' />
                </>
                    )
                })}
                </Box>
                </>
                }
        </Box>

        <Box h='280px' p='25px' minW='370px' w={'22vw'} mx='15px' mt='10px' mb='20px' justifyContent={'center'} boxShadow='md' borderWidth='1px' borderRadius="10px">
        <Text fontWeight='bold' fontSize='lg'>
            Keterangan
        </Text>
        <Box display='flex' mt='20px' justifyContent='space-between' >
            <Text fontWeight='semibold'>
            NIM :
            </Text>
            <Text fontWeight='semibold'>
            {NIM}
            </Text>
        </Box>
        <Box display='flex' mt='20px' justifyContent='space-between' >
            <Text fontWeight='semibold'>
            Email :
            </Text>
            <Text fontWeight='semibold'>
            {email}
            </Text>
        </Box>
        
        <Box display='flex' mt='20px' justifyContent='space-between' >
            <Text fontWeight='bold'>
            Jumlah Buku :
            </Text>
            <Text fontWeight='bold'>
            {cart}
            </Text>
        </Box>
        <Box mt='20px' display='flex' justifyContent='flex-end' >
            <Button w='full' borderColor="pink.400" borderRadius='9px' borderWidth='2px'
            _hover={{ bg: "pink" }} disabled={cart.length === 0 ? true : false}>
            Pinjam Sekarang
            </Button>
        </Box>
        </Box>

    </Box>
    </Box>
)
}