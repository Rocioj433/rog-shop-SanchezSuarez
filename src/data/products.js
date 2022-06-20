export const prod = [
    {
        id:1,
        title:'Memoria GeiL DDR4 16GB',
        price:40000,
        category:'memorias',
        stock:20,
        img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17140_Memoria_GeiL_DDR4_16GB__2x8GB__3200MHz_Super_Luce_RGB_TUF_Edition_8e9363a8-grn.jpg"
    },
    {
        id:2,
        title:'Procesador Intel Core i7-8750H',
        price:80000,
        category:"procesadores",
        stock:20,
        img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25672_Procesador_Intel_Core_i7_11700F_S1200_11th_Gen_Rocket_Lake_67a57574-grn.jpg"
    },
    {
        id:3,
        title:'Placa de Video MSI GeForce RTX 3090',
        price:400000,
        category:"placas",
        stock:20,
        img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32389_Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_VENTUS_3X_OC_bb8b3dba-grn.jpg"
    },
    {
        id:4,
        title:'Monitor Samsung  27"',
        price:100000,
        category:'monitores',
        stock:20,
        img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32017_Monitor_Samsung_Curvo_34__Ultrawide_WQHD_a9ddb899-grn.jpg"
    },{
        id:5,
        title:'Placa de Video PowerColor Radeon RX 6900',
        price:210000,
        category:'placas',
        stock:20,
        img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29504_Placa_de_Video_PowerColor_Radeon_RX_6900_XT_16GB_GDDR6_Red_Devil_ULTIMATE_d648b58e-grn.jpg"
    },{
        id:6,
        title:'Memoria Patriot Viper DDR4',
        price:6000,
        category:'memorias',
        stock:20,
        img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25461_Memoria_Patriot_Viper_DDR4_8GB_3200MHz_Steel_RGB_c4437b4e-grn.jpg"
    },{
        id:7,
        title:'Procesador AMD Ryzen 9',
        price:85000,
        category:'procesadores',
        stock:20,
        img:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22302_Procesador_AMD_Ryzen_9_5950X_4.9GHz_Turbo_AM4_-_No_incluye_Cooler_9d34d3b3-grn.jpg'
    },{
        id:8,
        title:'Monitor Gamer ASUS 27"',
        price:73000,
        category:'monitores',
        stock:20,
        img:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26090_Monitor_Gamer_ASUS_27__GAMING_VG278QR_165Hz_FHD_70fa7fe5-grn.jpg'
    }
]

export const product = [{
    id:1,
    title:'Memoria GeiL DDR4 16GB',
    price:40000,
    category:'memorias',
    stock:20,
    img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17140_Memoria_GeiL_DDR4_16GB__2x8GB__3200MHz_Super_Luce_RGB_TUF_Edition_8e9363a8-grn.jpg"
},
{
    id:2,
    title:'Procesador Intel Core i7-8750H',
    price:80000,
    category:"procesadores",
    stock:20,
    img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25672_Procesador_Intel_Core_i7_11700F_S1200_11th_Gen_Rocket_Lake_67a57574-grn.jpg"
},
{
    id:3,
    title:'Placa de Video MSI GeForce RTX 3090',
    price:400000,
    category:"placas",
    stock:20,
    img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32389_Placa_de_Video_MSI_GeForce_RTX_3090_24GB_GDDR6X_VENTUS_3X_OC_bb8b3dba-grn.jpg"
},
{
    id:4,
    title:'Monitor Samsung  27"',
    price:100000,
    category:'monitor',
    stock:20,
    img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_32017_Monitor_Samsung_Curvo_34__Ultrawide_WQHD_a9ddb899-grn.jpg"
},{
    id:5,
    title:'Placa de Video PowerColor Radeon RX 6900',
    price:210000,
    category:'placas',
    stock:20,
    img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_29504_Placa_de_Video_PowerColor_Radeon_RX_6900_XT_16GB_GDDR6_Red_Devil_ULTIMATE_d648b58e-grn.jpg"
},{
    id:6,
    name:'Memoria Patriot Viper DDR4',
    price:6000,
    category:'memorias',
    stock:20,
    img:"https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_25461_Memoria_Patriot_Viper_DDR4_8GB_3200MHz_Steel_RGB_c4437b4e-grn.jpg"
},{
    id:7,
    name:'Procesador AMD Ryzen 9',
    price:85000,
    category:'procesadores',
    stock:20,
    img:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22302_Procesador_AMD_Ryzen_9_5950X_4.9GHz_Turbo_AM4_-_No_incluye_Cooler_9d34d3b3-grn.jpg'
},{
    id:8,
    title:'Monitor Gamer ASUS 27"',
    price:73000,
    category:'monitores',
    stock:20,
    img:'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_26090_Monitor_Gamer_ASUS_27__GAMING_VG278QR_165Hz_FHD_70fa7fe5-grn.jpg'
}]

export const getItem = (id) => {
    return new Promise ((resolve, reject) => {
        const item = product.find(item => item.id === parseInt(id))
        setTimeout(() => {
            resolve(item)
        }, 2000)
    }) 
 }

export const traerProducts = (cat) =>{
    return new Promise( (resolve) => {
        const productFilter = prod.filter((prod) => prod.category === cat);
        setTimeout(() => {
            resolve(productFilter);
    }
        ,1);
      });
}
