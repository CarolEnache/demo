export const mockedBreadcrumbsProps = {
  categoryView: [1, 2, 3, 4],
  sectionCategory: 'hello',
  dispatchMock: jest.fn(),
};
export const mockedManufactureNameProps = {
  facetView: [
    {
      label: 'Example tablet manufacture name',
      count: '20',
    },
  ],
  dispatchMock: jest.fn(),
  setStateMock: jest.fn(),
};

export const mockSelectedFiltersProps = {
  selected: ['Example tablet manufacture name one'],
  setSelected: jest.fn(),
};

export const mockListOfItemsProps = [
  {
    Price: [
      {
        priceUsage: 'Offer',
        priceValue: '375.0',
        priceDescription: 'I',
      },
    ],
    name: 'Example item name one',
  },
  {
    Price: [
      {
        priceUsage: 'Offer',
        priceValue: '375.0',
        priceDescription: 'I',
      },
    ],
    name: 'Example item name two',
  },
];
