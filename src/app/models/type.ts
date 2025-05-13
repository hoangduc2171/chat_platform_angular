export interface ServicePackage {
    id: number, 
    name: string,
    price: number,
    caption: string,
    features: { content: string, type: 'limited' | 'unlimited' }[],
    image: string,
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
      detailAddress: string
    },
    serviceChoose: {
      serviceId: number,
      term: number
    },
    createAt: Date,
}

export interface JobArea {
  id: number, 
  name: string
}
