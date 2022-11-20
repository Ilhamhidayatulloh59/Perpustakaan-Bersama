import {
    Flex, Box, Text, Button, InputGroup, InputLeftElement, Icon, useDisclosure,
    InputRightElement, Input, Tooltip, useToast, Image,
    Modal, ModalOverlay, ModalHeader, ModalBody, ModalCloseButton, ModalContent, Divider, Badge
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import Axios from "axios";
import Swal from 'sweetalert2'

export default function CartDetail() {
    const { NIM, email ,isVerified, cart } = useSelector((state) => state.userSlice.value)
    const data = useSelector((state) => state.cartSlice.value);
    const loan = useSelector((state) => state.loanSlice.value);
    console.log(loan)


return (
    <Box>

        {loan.map(i => {
            return (
    <Box display='flex' justifyContent='center' flexWrap={'wrap'}>
        <Box h='480px' p='25px' minW='370px' w={'22vw'} mx='15px' mt='10px' mb='20px' justifyContent={'center'} boxShadow='md' borderWidth='1px' borderRadius="10px">
            <Text fontWeight='bold' fontSize='lg'>
                Detail Loan
            </Text>
            <Box display='flex' mt='10px' justifyContent='center' >
                <Image src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${i.no_invoice}`} />
            </Box>
            <Box display='flex' mt='10px' justifyContent='space-between' >
                <Text fontWeight='semibold'>
                No Invoice :
                </Text>
                <Text fontWeight='semibold'>
                {i.no_invoice}
                </Text>
            </Box>
            <Box display='flex' mt='10px' justifyContent='space-between' >
                <Text fontWeight='semibold'>
                NIM :
                </Text>
                <Text fontWeight='semibold'>
                {i.UserNIM}
                </Text>
            </Box>
            <Box display='flex' mt='10px' justifyContent='space-between' >
                <Text fontWeight='semibold'>
                Status :
                </Text>
                <Badge borderRadius="xl" alignSelf="center" color={i.transaction_status === 'Pengajuan' ? 'yellow.400' : i.transaction_status === 'Peminjaman' ? 'green.400' : 'red.400'}>
                    <Text fontWeight='semibold'>
                    {i.transaction_status}
                    </Text>
                </Badge>
            </Box>

            <Divider my='20px' />
            <Box display='flex' mt='10px' justifyContent='space-between' >
                <Text fontSize="small" fontWeight='semibold'>
                Tanggal Peminjaman :
                </Text>
                <Text fontSize="small" fontWeight='semibold'>
                {i.Borrow_date}
                </Text>
            </Box>
            <Box display='flex' mt='10px' justifyContent='space-between' >
                <Text fontSize="small" fontWeight='semibold'>
                Tanggal Pengembalian :
                </Text>
                <Text fontSize="small" fontWeight='semibold'>
                {i.Return_date}
                </Text>
            </Box>
            
            <Box display='flex' mt='30px' justifyContent='space-between' >
                <Text fontWeight='bold'>
                Jumlah Buku :
                </Text>
                <Text fontWeight='bold'>
                {i.Loan_Details.length}
                </Text>
            </Box>
            </Box>
        

        <Box minW='370px' w={'55vw'} mx='15px' my='10px' p='25px' px='20px' justifyContent={'center'} boxShadow='md' borderWidth='1px' borderRadius="10px">
                <Box boxShadow='sm' borderWidth='1px' borderRadius='10px' mb='20px' p='10px' _hover={{ boxShadow: 'lg' }}>
                {i.Loan_Details.map(item => {
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
        </Box>

    </Box>
    )
})}
    </Box>
)
}