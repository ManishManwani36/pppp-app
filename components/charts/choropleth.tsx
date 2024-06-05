"use client";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/geo
import { ResponsiveChoropleth } from "@nivo/geo";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const DummyData = [
  {
    id: "AFG",
    value: 636218,
  },
  {
    id: "AGO",
    value: 903004,
  },
  {
    id: "ALB",
    value: 80796,
  },
  {
    id: "ARE",
    value: 883153,
  },
  {
    id: "ARG",
    value: 858130,
  },
  {
    id: "ARM",
    value: 221421,
  },
  {
    id: "ATA",
    value: 171210,
  },
  {
    id: "ATF",
    value: 671836,
  },
  {
    id: "AUT",
    value: 58562,
  },
  {
    id: "AZE",
    value: 523513,
  },
  {
    id: "BDI",
    value: 419895,
  },
  {
    id: "BEL",
    value: 629963,
  },
  {
    id: "BEN",
    value: 736794,
  },
  {
    id: "BFA",
    value: 301707,
  },
  {
    id: "BGD",
    value: 532034,
  },
  {
    id: "BGR",
    value: 386163,
  },
  {
    id: "BHS",
    value: 230725,
  },
  {
    id: "BIH",
    value: 129232,
  },
  {
    id: "BLR",
    value: 137219,
  },
  {
    id: "BLZ",
    value: 990247,
  },
  {
    id: "BOL",
    value: 615937,
  },
  {
    id: "BRN",
    value: 394245,
  },
  {
    id: "BTN",
    value: 840306,
  },
  {
    id: "BWA",
    value: 270388,
  },
  {
    id: "CAF",
    value: 78324,
  },
  {
    id: "CAN",
    value: 75076,
  },
  {
    id: "CHE",
    value: 892146,
  },
  {
    id: "CHL",
    value: 247365,
  },
  {
    id: "CHN",
    value: 428969,
  },
  {
    id: "CIV",
    value: 812274,
  },
  {
    id: "CMR",
    value: 563933,
  },
  {
    id: "COG",
    value: 29677,
  },
  {
    id: "COL",
    value: 356932,
  },
  {
    id: "CRI",
    value: 444839,
  },
  {
    id: "CUB",
    value: 544724,
  },
  {
    id: "-99",
    value: 46881,
  },
  {
    id: "CYP",
    value: 94838,
  },
  {
    id: "CZE",
    value: 997142,
  },
  {
    id: "DEU",
    value: 609249,
  },
  {
    id: "DJI",
    value: 460071,
  },
  {
    id: "DNK",
    value: 50435,
  },
  {
    id: "DOM",
    value: 5544,
  },
  {
    id: "DZA",
    value: 473804,
  },
  {
    id: "ECU",
    value: 746682,
  },
  {
    id: "EGY",
    value: 332870,
  },
  {
    id: "ERI",
    value: 865757,
  },
  {
    id: "ESP",
    value: 709465,
  },
  {
    id: "EST",
    value: 43905,
  },
  {
    id: "ETH",
    value: 61972,
  },
  {
    id: "FIN",
    value: 494545,
  },
  {
    id: "FJI",
    value: 281192,
  },
  {
    id: "FLK",
    value: 277676,
  },
  {
    id: "FRA",
    value: 875686,
  },
  {
    id: "GAB",
    value: 331211,
  },
  {
    id: "GBR",
    value: 664433,
  },
  {
    id: "GEO",
    value: 21089,
  },
  {
    id: "GHA",
    value: 982049,
  },
  {
    id: "GIN",
    value: 575244,
  },
  {
    id: "GMB",
    value: 444148,
  },
  {
    id: "GNB",
    value: 840810,
  },
  {
    id: "GNQ",
    value: 601544,
  },
  {
    id: "GRC",
    value: 133399,
  },
  {
    id: "GTM",
    value: 8504,
  },
  {
    id: "GUY",
    value: 480343,
  },
  {
    id: "HND",
    value: 8169,
  },
  {
    id: "HRV",
    value: 340035,
  },
  {
    id: "HTI",
    value: 71996,
  },
  {
    id: "HUN",
    value: 298556,
  },
  {
    id: "IDN",
    value: 396885,
  },
  {
    id: "IND",
    value: 637334,
  },
  {
    id: "IRL",
    value: 515239,
  },
  {
    id: "IRN",
    value: 200477,
  },
  {
    id: "IRQ",
    value: 113530,
  },
  {
    id: "ISL",
    value: 487795,
  },
  {
    id: "ISR",
    value: 289987,
  },
  {
    id: "ITA",
    value: 297743,
  },
  {
    id: "JAM",
    value: 272725,
  },
  {
    id: "JOR",
    value: 842975,
  },
  {
    id: "JPN",
    value: 403792,
  },
  {
    id: "KAZ",
    value: 342075,
  },
  {
    id: "KEN",
    value: 463038,
  },
  {
    id: "KGZ",
    value: 704266,
  },
  {
    id: "KHM",
    value: 512760,
  },
  {
    id: "OSA",
    value: 964758,
  },
  {
    id: "KWT",
    value: 780248,
  },
  {
    id: "LAO",
    value: 850376,
  },
  {
    id: "LBN",
    value: 524434,
  },
  {
    id: "LBR",
    value: 313529,
  },
  {
    id: "LBY",
    value: 103728,
  },
  {
    id: "LKA",
    value: 822764,
  },
  {
    id: "LSO",
    value: 732836,
  },
  {
    id: "LTU",
    value: 225214,
  },
  {
    id: "LUX",
    value: 622020,
  },
  {
    id: "LVA",
    value: 627067,
  },
  {
    id: "MAR",
    value: 907436,
  },
  {
    id: "MDA",
    value: 958775,
  },
  {
    id: "MDG",
    value: 769518,
  },
  {
    id: "MEX",
    value: 974925,
  },
  {
    id: "MKD",
    value: 895347,
  },
  {
    id: "MLI",
    value: 734567,
  },
  {
    id: "MMR",
    value: 646184,
  },
  {
    id: "MNE",
    value: 841661,
  },
  {
    id: "MNG",
    value: 607228,
  },
  {
    id: "MOZ",
    value: 117853,
  },
  {
    id: "MRT",
    value: 671713,
  },
  {
    id: "MWI",
    value: 361223,
  },
  {
    id: "MYS",
    value: 202572,
  },
  {
    id: "NAM",
    value: 30289,
  },
  {
    id: "NCL",
    value: 803642,
  },
  {
    id: "NER",
    value: 28290,
  },
  {
    id: "NGA",
    value: 360236,
  },
  {
    id: "NIC",
    value: 788716,
  },
  {
    id: "NLD",
    value: 179831,
  },
  {
    id: "NOR",
    value: 836352,
  },
  {
    id: "NPL",
    value: 334918,
  },
  {
    id: "NZL",
    value: 664673,
  },
  {
    id: "OMN",
    value: 820362,
  },
  {
    id: "PAK",
    value: 719875,
  },
  {
    id: "PAN",
    value: 641874,
  },
  {
    id: "PER",
    value: 941807,
  },
  {
    id: "PHL",
    value: 261226,
  },
  {
    id: "PNG",
    value: 459492,
  },
  {
    id: "POL",
    value: 928671,
  },
  {
    id: "PRI",
    value: 93786,
  },
  {
    id: "PRT",
    value: 549838,
  },
  {
    id: "PRY",
    value: 843293,
  },
  {
    id: "QAT",
    value: 780166,
  },
  {
    id: "ROU",
    value: 626366,
  },
  {
    id: "RUS",
    value: 209905,
  },
  {
    id: "RWA",
    value: 452266,
  },
  {
    id: "ESH",
    value: 918211,
  },
  {
    id: "SAU",
    value: 956666,
  },
  {
    id: "SDN",
    value: 108053,
  },
  {
    id: "SDS",
    value: 657267,
  },
  {
    id: "SEN",
    value: 755491,
  },
  {
    id: "SLB",
    value: 865626,
  },
  {
    id: "SLE",
    value: 257543,
  },
  {
    id: "SLV",
    value: 733734,
  },
  {
    id: "ABV",
    value: 536977,
  },
  {
    id: "SOM",
    value: 372034,
  },
  {
    id: "SRB",
    value: 791312,
  },
  {
    id: "SUR",
    value: 500889,
  },
  {
    id: "SVK",
    value: 579875,
  },
  {
    id: "SVN",
    value: 251198,
  },
  {
    id: "SWZ",
    value: 944352,
  },
  {
    id: "SYR",
    value: 263224,
  },
  {
    id: "TCD",
    value: 555321,
  },
  {
    id: "TGO",
    value: 259816,
  },
  {
    id: "THA",
    value: 271187,
  },
  {
    id: "TJK",
    value: 172613,
  },
  {
    id: "TKM",
    value: 187509,
  },
  {
    id: "TLS",
    value: 92524,
  },
  {
    id: "TTO",
    value: 720140,
  },
  {
    id: "TUN",
    value: 639508,
  },
  {
    id: "TUR",
    value: 237303,
  },
  {
    id: "TWN",
    value: 666583,
  },
  {
    id: "TZA",
    value: 77012,
  },
  {
    id: "UGA",
    value: 107140,
  },
  {
    id: "UKR",
    value: 217976,
  },
  {
    id: "URY",
    value: 154948,
  },
  {
    id: "USA",
    value: 163804,
  },
  {
    id: "UZB",
    value: 71739,
  },
  {
    id: "VEN",
    value: 36016,
  },
  {
    id: "VNM",
    value: 93391,
  },
  {
    id: "VUT",
    value: 532281,
  },
  {
    id: "PSE",
    value: 586388,
  },
  {
    id: "YEM",
    value: 542163,
  },
  {
    id: "ZAF",
    value: 897949,
  },
  {
    id: "ZMB",
    value: 827012,
  },
  {
    id: "ZWE",
    value: 665777,
  },
  {
    id: "KOR",
    value: 340498,
  },
];

export const Choropleth = () => {
  return (
    <ResponsiveChoropleth
      data={DummyData}
      // features="/* please have a look at the description for usage */"
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      // @ts-ignore
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
        {
          id: "gradient",
          type: "linearGradient",
          colors: [
            {
              offset: 0,
              color: "#000",
            },
            {
              offset: 100,
              color: "inherit",
            },
          ],
        },
      ]}
      fill={[
        {
          match: {
            id: "CAN",
          },
          id: "dots",
        },
        {
          match: {
            id: "CHN",
          },
          id: "lines",
        },
        {
          match: {
            id: "ATA",
          },
          id: "gradient",
        },
      ]}
      legends={[
        {
          anchor: "bottom-left",
          direction: "column",
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: "left-to-right",
          itemTextColor: "#444444",
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000000",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};
