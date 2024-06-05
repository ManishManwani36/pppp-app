"use client";

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/circle-packing
import { ResponsiveCirclePacking } from "@nivo/circle-packing";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const DummyData = {
  name: "nivo",
  color: "hsl(331, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(117, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(63, 70%, 50%)",
          children: [
            {
              name: "cchart",
              color: "hsl(268, 70%, 50%)",
              loc: 120175,
            },
            {
              name: "xAxis",
              color: "hsl(296, 70%, 50%)",
              loc: 165708,
            },
            {
              name: "yAxis",
              color: "hsl(9, 70%, 50%)",
              loc: 176983,
            },
            {
              name: "layers",
              color: "hsl(219, 70%, 50%)",
              loc: 1070,
            },
          ],
        },
        {
          name: "ppie",
          color: "hsl(68, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(89, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(126, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(255, 70%, 50%)",
                      loc: 196573,
                    },
                    {
                      name: "slices",
                      color: "hsl(200, 70%, 50%)",
                      loc: 196813,
                    },
                    {
                      name: "bbox",
                      color: "hsl(162, 70%, 50%)",
                      loc: 158101,
                    },
                  ],
                },
                {
                  name: "donut",
                  color: "hsl(177, 70%, 50%)",
                  loc: 183376,
                },
                {
                  name: "gauge",
                  color: "hsl(85, 70%, 50%)",
                  loc: 121897,
                },
              ],
            },
            {
              name: "legends",
              color: "hsl(270, 70%, 50%)",
              loc: 156719,
            },
          ],
        },
      ],
    },
    {
      name: "colors",
      color: "hsl(196, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(217, 70%, 50%)",
          loc: 142354,
        },
        {
          name: "hsl",
          color: "hsl(282, 70%, 50%)",
          loc: 90713,
        },
      ],
    },
    {
      name: "utils",
      color: "hsl(13, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(25, 70%, 50%)",
          loc: 137148,
        },
        {
          name: "resetClock",
          color: "hsl(48, 70%, 50%)",
          loc: 43987,
        },
        {
          name: "noop",
          color: "hsl(325, 70%, 50%)",
          loc: 47405,
        },
        {
          name: "tick",
          color: "hsl(1, 70%, 50%)",
          loc: 93578,
        },
        {
          name: "forceGC",
          color: "hsl(158, 70%, 50%)",
          loc: 78865,
        },
        {
          name: "stackTrace",
          color: "hsl(330, 70%, 50%)",
          loc: 163947,
        },
        {
          name: "dbg",
          color: "hsl(160, 70%, 50%)",
          loc: 5210,
        },
      ],
    },
    {
      name: "generators",
      color: "hsl(344, 70%, 50%)",
      children: [
        {
          name: "address",
          color: "hsl(313, 70%, 50%)",
          loc: 3981,
        },
        {
          name: "city",
          color: "hsl(149, 70%, 50%)",
          loc: 62482,
        },
        {
          name: "animal",
          color: "hsl(228, 70%, 50%)",
          loc: 53423,
        },
        {
          name: "movie",
          color: "hsl(219, 70%, 50%)",
          loc: 110226,
        },
        {
          name: "user",
          color: "hsl(123, 70%, 50%)",
          loc: 144355,
        },
      ],
    },
    {
      name: "set",
      color: "hsl(42, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(127, 70%, 50%)",
          loc: 33595,
        },
        {
          name: "intersect",
          color: "hsl(128, 70%, 50%)",
          loc: 105088,
        },
        {
          name: "merge",
          color: "hsl(348, 70%, 50%)",
          loc: 137323,
        },
        {
          name: "reverse",
          color: "hsl(68, 70%, 50%)",
          loc: 147490,
        },
        {
          name: "toArray",
          color: "hsl(236, 70%, 50%)",
          loc: 197129,
        },
        {
          name: "toObject",
          color: "hsl(120, 70%, 50%)",
          loc: 15998,
        },
        {
          name: "fromCSV",
          color: "hsl(322, 70%, 50%)",
          loc: 31691,
        },
        {
          name: "slice",
          color: "hsl(283, 70%, 50%)",
          loc: 69609,
        },
        {
          name: "append",
          color: "hsl(251, 70%, 50%)",
          loc: 69400,
        },
        {
          name: "prepend",
          color: "hsl(186, 70%, 50%)",
          loc: 162504,
        },
        {
          name: "shuffle",
          color: "hsl(221, 70%, 50%)",
          loc: 178208,
        },
        {
          name: "pick",
          color: "hsl(5, 70%, 50%)",
          loc: 107611,
        },
        {
          name: "plouc",
          color: "hsl(20, 70%, 50%)",
          loc: 25137,
        },
      ],
    },
    {
      name: "text",
      color: "hsl(300, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(181, 70%, 50%)",
          loc: 5838,
        },
        {
          name: "slugify",
          color: "hsl(61, 70%, 50%)",
          loc: 133565,
        },
        {
          name: "snakeCase",
          color: "hsl(47, 70%, 50%)",
          loc: 60085,
        },
        {
          name: "camelCase",
          color: "hsl(79, 70%, 50%)",
          loc: 193888,
        },
        {
          name: "repeat",
          color: "hsl(138, 70%, 50%)",
          loc: 124669,
        },
        {
          name: "padLeft",
          color: "hsl(286, 70%, 50%)",
          loc: 1566,
        },
        {
          name: "padRight",
          color: "hsl(336, 70%, 50%)",
          loc: 127021,
        },
        {
          name: "sanitize",
          color: "hsl(33, 70%, 50%)",
          loc: 155824,
        },
        {
          name: "ploucify",
          color: "hsl(96, 70%, 50%)",
          loc: 100216,
        },
      ],
    },
    {
      name: "misc",
      color: "hsl(262, 70%, 50%)",
      children: [
        {
          name: "greetings",
          color: "hsl(207, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(34, 70%, 50%)",
              loc: 91271,
            },
            {
              name: "HOWDY",
              color: "hsl(236, 70%, 50%)",
              loc: 120846,
            },
            {
              name: "aloha",
              color: "hsl(316, 70%, 50%)",
              loc: 120520,
            },
            {
              name: "AHOY",
              color: "hsl(5, 70%, 50%)",
              loc: 44028,
            },
          ],
        },
        {
          name: "other",
          color: "hsl(266, 70%, 50%)",
          loc: 86220,
        },
        {
          name: "path",
          color: "hsl(240, 70%, 50%)",
          children: [
            {
              name: "pathA",
              color: "hsl(170, 70%, 50%)",
              loc: 42731,
            },
            {
              name: "pathB",
              color: "hsl(107, 70%, 50%)",
              children: [
                {
                  name: "pathB1",
                  color: "hsl(329, 70%, 50%)",
                  loc: 42182,
                },
                {
                  name: "pathB2",
                  color: "hsl(168, 70%, 50%)",
                  loc: 11328,
                },
                {
                  name: "pathB3",
                  color: "hsl(155, 70%, 50%)",
                  loc: 51884,
                },
                {
                  name: "pathB4",
                  color: "hsl(93, 70%, 50%)",
                  loc: 67412,
                },
              ],
            },
            {
              name: "pathC",
              color: "hsl(42, 70%, 50%)",
              children: [
                {
                  name: "pathC1",
                  color: "hsl(156, 70%, 50%)",
                  loc: 7759,
                },
                {
                  name: "pathC2",
                  color: "hsl(177, 70%, 50%)",
                  loc: 24172,
                },
                {
                  name: "pathC3",
                  color: "hsl(69, 70%, 50%)",
                  loc: 55958,
                },
                {
                  name: "pathC4",
                  color: "hsl(115, 70%, 50%)",
                  loc: 67350,
                },
                {
                  name: "pathC5",
                  color: "hsl(79, 70%, 50%)",
                  loc: 2453,
                },
                {
                  name: "pathC6",
                  color: "hsl(32, 70%, 50%)",
                  loc: 3067,
                },
                {
                  name: "pathC7",
                  color: "hsl(352, 70%, 50%)",
                  loc: 10603,
                },
                {
                  name: "pathC8",
                  color: "hsl(297, 70%, 50%)",
                  loc: 93106,
                },
                {
                  name: "pathC9",
                  color: "hsl(18, 70%, 50%)",
                  loc: 74095,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const CirclePacking = () => {
  return (
    <ResponsiveCirclePacking
      data={DummyData}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      id="name"
      value="loc"
      colors={{ scheme: "nivo" }}
      childColor={{
        from: "color",
        modifiers: [["brighter", 0.4]],
      }}
      padding={4}
      enableLabels={true}
      labelsFilter={(n) => 2 === n.node.depth}
      labelsSkipRadius={10}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.5]],
      }}
      defs={[
        {
          id: "lines",
          type: "patternLines",
          background: "none",
          color: "inherit",
          rotation: -45,
          lineWidth: 5,
          spacing: 8,
        },
      ]}
      fill={[
        {
          match: {
            depth: 1,
          },
          id: "lines",
        },
      ]}
    />
  );
};
