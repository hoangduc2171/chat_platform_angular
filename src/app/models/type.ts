export interface ServicePackage {
    id: number, 
    name: string,
    price: number,
    caption: string,
    features: { content: string, type: 'limited' | 'unlimited' }[],
    image: string,
    term: 'Tháng' | '6 Tháng' | 'Năm',
    createdAt?: Date,
}

export interface Partner {
    id: number,
    name: string,
    phone: string,
    email: string,
    jobArea: number[],
    address: {
      provinceId: number,
      districtId: number,
      wardId: number,
      detailAddress?: string
    },
    serviceChoose: {
      id: number,
      term: number
    },
    createAt: Date,
}

export interface JobArea {
  id: number, 
  name: string
}

export interface Province {
  code: number, 
  name: string, 
  divison_type: string,
  codename: string,
  phone_code: number,
  district?: [

  ],
  wards: [

  ]
}
