export enum ResponsibilitiesCategories {
  TRADING = "Торговля",
  PRODUCTION = "Производство",
  SHOWDOWN = "Разборки",
  CONTROL = "Управление",
}
export const responsibilities = [
  [
    ResponsibilitiesCategories.TRADING,
    [
      {
        value: "Продавать продукт",
        slug: "sellAProduct",
      },
      {
        value: "Выставлять цены",
        slug: "setPrices",
      },
      {
        value: "Смотреть аналитику",
        slug: "viewAnalytics",
      },
    ],
  ],
  [
    ResponsibilitiesCategories.PRODUCTION,
    [
      { value: "Закупать сырье", slug: "buyRawMaterials" },
      { value: "Назначать рабочих", slug: "assignWorkers" },
    ],
  ],
  [
    ResponsibilitiesCategories.SHOWDOWN,
    [
      { value: "Дуэль", slug: "duel" },
      { value: "Выставлять претензии", slug: "makeClaims" },
    ],
  ],
  [
    ResponsibilitiesCategories.CONTROL,
    [
      { value: "Назначать должности", slug: "assignPositions" },
      { value: "Выгонять из банды", slug: "kickOutOfBand" },
    ],
  ],
];
