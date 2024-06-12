export const responsibilitiesCategories = {
  TRADING: "Торговля",
  PRODUCTION: "Производство",
  SHOWDOWN: "Разборки",
  CONTROL: "Управление",
} as const;

export const responsibilities = new Map([
  [
    responsibilitiesCategories.TRADING,
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
    responsibilitiesCategories.PRODUCTION,
    [
      { value: "Закупать сырье", slug: "buyRawMaterials" },
      { value: "Назначать рабочих", slug: "assignWorkers" },
    ],
  ],
  [
    responsibilitiesCategories.SHOWDOWN,
    [
      { value: "Дуэль", slug: "duel" },
      { value: "Выставлять претензии", slug: "makeClaims" },
    ],
  ],
  [
    responsibilitiesCategories.CONTROL,
    [
      { value: "Назначать должности", slug: "assignPositions" },
      { value: "Выгонять из банды", slug: "kickOutOfBand" },
    ],
  ],
]);
