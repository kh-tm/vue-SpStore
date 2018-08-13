import { phonesQuery } from "../functions/ajax";

export default {
	namespaced: true,
	state: {
		phones: new Set([
			{
				CPU:"Qualcomm Snapdragon 450, 14 нм, 8 ядер Cortex-A53 1.8 ГГц",
				RAM:"3",
				ROM:"32",
				cameraResolution:"CMOS, f/2.2, 13 МП",
				color:"Black",
				description:"Новый телефон Xiaomi Redmi 5 похож на Mi Mix 2 благодаря 5.7-дюймовому дисплею с тонкими рамками, закругленным краям и формату 18:9. Кроме того, новинка получила новый 8-ядерный чипсет Snapdragon 450 с 14-нанометровым тех.процессом и обновленную камеру на 12 Мп с увеличенным размером пикселей 1.25μm. Как и всегда, в категории бюджетных устройств нет равных Xiaomi Redmi 5, купить в Казани который можно у нас в магазине tablet4U с гарантией 12 мес.",
				id:"1",
				manufacturerName:"Xiaomi",
				model:"Redmi 5",
				photos: [
					"!T-kit.ru_Xiaomi_Redmi_5_Plus_Black_003.png",
					"copy_xiaomi_redmi_5_2_16_black_5a5e1170df300_images_2551794255.jpg",
					"d3f2e72e4de7a3906cdaebb78cd7.jpg",
					"Redmi-5_04_preview-1.png",
					"xxiaomi-redmi-5-black-715x400.png.pagespeed.ic.8GxOre0ynm.jpg"
				],
				price:9900,
				screenDiagonal:6,
				screenResolution:"HD+ (1440 x 720), 409 ppi, 18:9",
				stock:4
			},
			{
				CPU:"Qualcomm Snapdragon 450, 14 нм, 8 ядер Cortex-A53 1.8 ГГц",
				RAM:"3",
				ROM:"32",
				cameraResolution:"CMOS, f/2.2, 13 МП",
				color:"Black",
				description:"Новый телефон Xiaomi Redmi 5 похож на Mi Mix 2 благодаря 5.7-дюймовому дисплею с тонкими рамками, закругленным краям и формату 18:9. Кроме того, новинка получила новый 8-ядерный чипсет Snapdragon 450 с 14-нанометровым тех.процессом и обновленную камеру на 12 Мп с увеличенным размером пикселей 1.25μm. Как и всегда, в категории бюджетных устройств нет равных Xiaomi Redmi 5, купить в Казани который можно у нас в магазине tablet4U с гарантией 12 мес.",
				id:"1",
				manufacturerName:"Xiaomi",
				model:"Redmi 5",
				photos: [
					"!T-kit.ru_Xiaomi_Redmi_5_Plus_Black_003.png",
					"copy_xiaomi_redmi_5_2_16_black_5a5e1170df300_images_2551794255.jpg",
					"d3f2e72e4de7a3906cdaebb78cd7.jpg",
					"Redmi-5_04_preview-1.png",
					"xxiaomi-redmi-5-black-715x400.png.pagespeed.ic.8GxOre0ynm.jpg"
				],
				price:9900,
				screenDiagonal:6,
				screenResolution:"HD+ (1440 x 720), 409 ppi, 18:9",
				stock:4
			},
			{
				CPU:"Qualcomm Snapdragon 450, 14 нм, 8 ядер Cortex-A53 1.8 ГГц",
				RAM:"3",
				ROM:"32",
				cameraResolution:"CMOS, f/2.2, 13 МП",
				color:"Black",
				description:"Новый телефон Xiaomi Redmi 5 похож на Mi Mix 2 благодаря 5.7-дюймовому дисплею с тонкими рамками, закругленным краям и формату 18:9. Кроме того, новинка получила новый 8-ядерный чипсет Snapdragon 450 с 14-нанометровым тех.процессом и обновленную камеру на 12 Мп с увеличенным размером пикселей 1.25μm. Как и всегда, в категории бюджетных устройств нет равных Xiaomi Redmi 5, купить в Казани который можно у нас в магазине tablet4U с гарантией 12 мес.",
				id:"1",
				manufacturerName:"Xiaomi",
				model:"Redmi 5",
				photos: [
					"!T-kit.ru_Xiaomi_Redmi_5_Plus_Black_003.png",
					"copy_xiaomi_redmi_5_2_16_black_5a5e1170df300_images_2551794255.jpg",
					"d3f2e72e4de7a3906cdaebb78cd7.jpg",
					"Redmi-5_04_preview-1.png",
					"xxiaomi-redmi-5-black-715x400.png.pagespeed.ic.8GxOre0ynm.jpg"
				],
				price:9900,
				screenDiagonal:6,
				screenResolution:"HD+ (1440 x 720), 409 ppi, 18:9",
				stock:4
			}
		]),
	},
	getters: {
		phones(state){
			return state.phones;
		}
	},
	mutations: {
		
	},
	actions: {
		
	}
};