import images from "../commons/images";

class MyPortfolio {
    constructor() {
        this.MENU = [
            {
                id: 1,
                name: "Tokenization Platform",
                description: "Tools that helps you to create digital assets (Decentralized Token) with ease",
                skill: 'React, MATERIAL-UI',
                image: images.imgProjectTokenization.default,
                color: '#3F4164',
                route: "https://token.omplatform.com/",
                img: [images.imgSliderTokenization1.default, images.imgSliderTokenization2.default, images.imgSliderTokenization3.default, images.imgSliderTokenization4.default, images.imgSliderTokenization5.default,]
            },
            {
                id: 2,
                name: "OM Platform",
                description: 'OmPlatform provides tools that help facilitate blockchain transaction in tangible and complete way. ',
                skill: 'Wordpress, CSS',
                image: images.imgProjectOmPlatform.default,
                color: '#1D223E',
                route: "https://omplatform.com/",
                img: [images.imgSliderOmPlatform1.default, images.imgSliderOmPlatform2.default]

            },
            {
                id: 3,
                name: "Urban Crowdfunding",
                description: 'Crowdfunding platform from Donation, Reward Donation',
                skill: 'React, ANT DESIGN',
                image: images.imgProjectUrbanCrown.default,
                color: '#8F704E',
                route: "https://urbanfund.asia/home",
                img: [images.imgSliderUrbanFund1.default, images.imgSliderUrbanFund2.default, images.imgSliderUrbanFund3.default, images.imgSliderUrbanFund4.default]
            },
            {
                id: 4,
                name: "ADMIN CM-BUS",
                description: "ระบบตั๋วโดยสารสาธารณะ เทศบาลนครเชียงใหม่ ระบบเทคโนโลยีสารสนเทศ การชำระเงินค่าโดยสารอิเล็กทรอนิกส์",
                skill: 'Preact, MATERIAL-UI',
                image: images.imgProjectSell.default,
                color: '#FF6161',
                route: "https://cmbus-admin-dev.leafbot.io/",
                img: [images.imgSliderCMBUSAdmin1.default,images.imgSliderCMBUSAdmin2.default,images.imgSliderCMBUSAdmin3.default,images.imgSliderCMBUSAdmin4.default]
            },
            {
                id: 5,
                name: "SMART SIGNAGE",
                description: "โครงการทดสอบระบบการเดินทางอัจฉริยะ",
                skill: 'HTML, CSS, JavaScript, Ajax',
                image: images.imgProjectUrbanTransit.default,
                color: '#24255B',
                route: "https://compasscm.com/%E0%B8%AD%E0%B8%99%E0%B8%B2%E0%B8%84%E0%B8%95%E0%B8%A3%E0%B8%96%E0%B9%80%E0%B8%A1%E0%B8%A5%E0%B9%8C%E0%B9%84%E0%B8%9F%E0%B8%9F%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83/",
                img: [images.imgSliderSmartSignage1.default, images.imgSliderSmartSignage2.default, images.imgSliderSmartSignage3.default, images.imgSliderSmartSignage4.default, images.imgSliderSmartSignage5.default]
            },
            {
                id: 6,
                name: "Urban Transit",
                description: "Realtime Local Route Map",
                skill: 'React Native',
                image: images.imgProjectCmTransit.default,
                color: '#24255B',
                route: "https://play.google.com/store/apps/details?id=com.cmtransit",
                img: [images.imgSliderUrbanTransit1.default, images.imgSliderUrbanTransit2.default, images.imgSliderUrbanTransit3.default, images.imgSliderUrbanTransit4.default, images.imgSliderUrbanTransit5.default, images.imgSliderUrbanTransit6.default, images.imgSliderUrbanTransit7.default, images.imgSliderUrbanTransit8.default]
            },
            {
                id: 7,
                name: "Om Wallet",
                description: "Crypto wallet that helps you to easily access blockchain technology",
                skill: 'React Native',
                image: images.imgProjectOmWallet.default,
                color: '#DE7F9D',
                route: "https://play.google.com/store/apps/details?id=com.omplatform.wallet",
                img: [images.imgSliderOmWallet1.default, images.imgSliderOmWallet2.default, images.imgSliderOmWallet3.default, images.imgSliderOmWallet4.default, images.imgSliderOmWallet5.default, images.imgSliderOmWallet6.default]
            },
            {
                id: 8,
                name: "Om Ordering Merchant",
                description: "Om Ordering เปิดรับสมัครร้านค้า และร้านอาหาร ที่ต้องการขายอาหารแบบ Drive Thru และ Delivery",
                skill: 'React Native',
                image: images.imgProjectOmMerchant.default,
                color: '#F6623D',
                route: "https://play.google.com/store/apps/details?id=com.omplatform.merchant",
                route2: "https://foods.omplatform.com/vendor-registration/",
                img: [images.imgSliderOmMerchant1.default, images.imgSliderOmMerchant2.default, images.imgSliderOmMerchant3.default, images.imgSliderOmMerchant4.default, images.imgSliderOmMerchant5.default, images.imgSliderOmMerchant6.default, images.imgSliderOmMerchant7.default]
            },
            {
                id: 9,
                name: "CmBus",
                description: "ระบบออกตั๋วรถเมล์เทศบาลนครเชียงใหม่ (สำหรับเจ้าหน้าที่ออกตั๋ว)",
                skill: 'React Native (POS SUNMI STORE)',
                image: images.imgProjectSell.default,
                color: '#FF6161',
                route: "",
                img: [images.imgSliderCMBUSPOS1.default, images.imgSliderCMBUSPOS2.default, images.imgSliderCMBUSPOS3.default, images.imgSliderCMBUSPOS4.default, images.imgSliderCMBUSPOS5.default, images.imgSliderCMBUSPOS6.default, images.imgSliderCMBUSPOS7.default, images.imgSliderCMBUSPOS8.default]
            },
            {
                id: 10,
                name: "Finedae",
                description: "นำเสนอเนื้อหาแนว Lifestyle Guide ภายใต้ปรัชญา “Dedication to a Better Lifestyle”",
                skill: 'PHP HTML Javascript, CSS',
                image: images.imgProjectFineDae.default,
                color: '#193663',
                route: "http://www.finedae.com/",
                img: [images.imgSliderFineDae1.default, images.imgSliderFineDae2.default, images.imgSliderFineDae3.default]
            },
            {
                id: 11,
                name: "Siam Blockchain Pro",
                description: "ข่าวสารบิทคอยและ Cryptocurrency เพื่อคนไทย",
                skill: 'React, ANT DESIGN, CSS',
                image: images.imgProjectSiamBlockchainPro.default,
                color: '#7C56A4',
                route: "https://www.siamblockchainpro.com/",
                img: [images.imgSliderSiamBlockChain1.default, images.imgSliderSiamBlockChain2.default, images.imgSliderSiamBlockChain3.default, images.imgSliderSiamBlockChain4.default, images.imgSliderSiamBlockChain5.default, images.imgSliderSiamBlockChain6.default,  images.imgSliderSiamBlockChain7.default, images.imgSliderSiamBlockChain8.default, images.imgSliderSiamBlockChain9.default]
            },
            {
                id: 12,
                name: "Banpu",
                description: "Banpu is a pioneering Asian energy company, operating business in coal, power generation, and integrated energy sectors.",
                skill: 'PHP HTML Javascript, Vue JS, CSS, SCSS',
                image: images.imgProjectBanpu.default,
                color: '#43317C',
                route: "http://printfhost.com/banpu/",
                img: [images.imgSliderBanPu1.default, images.imgSliderBanPu2.default, images.imgSliderBanPu3.default, images.imgSliderBanPu4.default, images.imgSliderBanPu5.default]
            },
        ];
    }
}

export default new MyPortfolio();
