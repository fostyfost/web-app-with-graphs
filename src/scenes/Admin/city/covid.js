const additional = {
  connections: {
    is: { inbound: "", outbound: "is" },
    narrower: { inbound: "broader", outbound: "narrower" },
    related: { inbound: "related", outbound: "related" },
    to: { inbound: "to", outbound: "to" },
    from: { inbound: "from", outbound: "from" },
    context: { inbound: "context", outbound: "context" },
    "experienced in": {
      inbound: "experience provided by",
      outbound: "experienced in"
    },
    "working on": { inbound: "worked on by", outbound: "working on" },
    "interested in": { inbound: "interested by", outbound: "interested in" },
    using: { inbound: "used by", outbound: "using" },
    has: { inbound: "has", outbound: "has" },
    with: { inbound: "with", outbound: "with" },
    "contact for": { inbound: "contact", outbound: "contact for" },
    "relevant to": { inbound: "relevant to", outbound: "relevant to" },
    needs: { inbound: "is needed by", outbound: "needs" },
    provides: { inbound: "is provided by", outbound: "provides" },
    "part of": { inbound: "superset of", outbound: "part of" },
    "sourced from": { inbound: "sourced by", outbound: "sourced from" },
    "licensed with": { inbound: "licensed by", outbound: "licensed with" },
    "published in": { inbound: "published by", outbound: "published in" },
    "resulted in": { inbound: "preceded", outbound: "resulted in" },
    "member of": { inbound: "has member", outbound: "member of" },
    "wants to work on": {
      inbound: "wants to be worked on by",
      outbound: "wants to work on"
    },
    "sponsored by": { inbound: "sponsers", outbound: "sponsored by" },
    "located in": { inbound: "located by", outbound: "located in" },
    used: { inbound: "used by", outbound: "used" },
    "inspired by": { inbound: "inspires", outbound: "inspired by" },
    "discussed in": { inbound: "references", outbound: "discussed in" }
  },
  elements: {
    Article: {
      form: [
        { label: "Title" },
        { label: "Description" },
        { label: "Link" },
        { label: "Source" },
        {
          label: "Activity Hub",
          options: [
            "Community",
            "Cure",
            "Vaccine",
            "Diagnostic",
            "Care",
            "Economy"
          ],
          schema: {
            connections: ["relevant to"],
            elements: ["Hubs of Activity"]
          }
        },
        {
          label: "Tags",
          schema: {
            connections: ["relevant to"],
            elements: ["Meta Data", "Method", "Research Data Alliance"]
          }
        },
        {
          label: "Country",
          schema: {
            connections: ["relevant to"],
            elements: ["Country"]
          }
        },
        {
          label: "Data Set",
          schema: {
            connections: ["relevant to"],
            elements: ["Data Set"]
          }
        },
        {
          label: "Relevant Analysis",
          schema: {
            connections: ["relevant to"],
            elements: ["Analysis"]
          }
        },
        {
          label: "Relevant Tool",
          schema: {
            connections: ["relevant to"],
            elements: ["Tool"]
          }
        },
        {
          label: "Audience",
          schema: {
            connections: ["is"],
            elements: ["Role"]
          }
        }
      ]
    }
  }
};

const schema = {
  connections: [
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "is",
      uuid: "8f4d817c-cc13-478d-a442-00dba9e30279",
      createdAt: 1583945876255,
      updatedAt: 1583945876255
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "narrower",
      uuid: "1d1e2647-3c7e-425f-b8b1-db51f583ba9b",
      createdAt: 1583945876259,
      updatedAt: 1583945876259
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "related",
      uuid: "ee302a79-050f-40ed-a0b5-cf2f6e97d1e4",
      createdAt: 1583945876263,
      updatedAt: 1583945876263
    },
    {
      srcDstTypes: [
        [
          "43370da8-6447-410c-abb9-a66a7ee7742d",
          "ccb1fd11-148e-4a25-a316-8f4be56f1542"
        ]
      ],
      srcDstTypeNames: [["CollaborationRequest", "User"]],
      name: "to",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      updatedAt: 1584071271464,
      uuid: "492f9051-0a11-4361-824a-dfe90ef87a88",
      createdAt: 1583945876272
    },
    {
      srcDstTypes: [
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "43370da8-6447-410c-abb9-a66a7ee7742d"
        ]
      ],
      srcDstTypeNames: [["User", "CollaborationRequest"]],
      name: "from",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      updatedAt: 1584071317000,
      uuid: "41bc5c34-b8f6-4fae-a296-f1a08eee5a66",
      createdAt: 1583945876282
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "context",
      uuid: "bc91bf12-3111-4d27-a8b9-bf8ae696e24a",
      createdAt: 1583945876288,
      updatedAt: 1583945876288
    },
    {
      srcDstTypes: [
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "8359061e-7fad-4385-811e-ecc962d788ae"
        ]
      ],
      srcDstTypeNames: [["User", "Method"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "experienced in",
      uuid: "dd273770-e393-4b01-9f89-0c7febd7ecf0",
      createdAt: 1583947763623,
      updatedAt: 1583947763623
    },
    {
      srcDstTypes: [
        [
          "c11db948-919b-4467-bac0-4ae44205b138",
          "4f98cf79-2664-49ef-bcff-957dd79296c2"
        ],
        [
          "c11db948-919b-4467-bac0-4ae44205b138",
          "bc191beb-2fbd-4640-8934-d976aad68153"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "0e621498-3d1b-4574-83ae-90191be203e0"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "4f98cf79-2664-49ef-bcff-957dd79296c2"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "72707741-f51e-405f-b1b5-d87f4a0e6886"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "bc191beb-2fbd-4640-8934-d976aad68153"
        ]
      ],
      srcDstTypeNames: [
        ["Organization", "Hub of Activity"],
        ["Organization", "Research Data Alliance"],
        ["User", "Project"],
        ["User", "Hub of Activity"],
        ["User", "Analysis"],
        ["User", "Research Data Alliance"]
      ],
      name: "working on",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1587493086722,
      uuid: "09bb2565-64dc-442c-8b83-9e4430459a59",
      createdAt: 1583947788458
    },
    {
      srcDstTypes: [
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "72707741-f51e-405f-b1b5-d87f4a0e6886"
        ]
      ],
      srcDstTypeNames: [["User", "Analysis"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "interested in",
      uuid: "b37513d8-4f3f-4f63-b82a-ee3a943a5a88",
      createdAt: 1583947797252,
      updatedAt: 1583947797252
    },
    {
      srcDstTypes: [
        [
          "72707741-f51e-405f-b1b5-d87f4a0e6886",
          "8359061e-7fad-4385-811e-ecc962d788ae"
        ],
        [
          "72707741-f51e-405f-b1b5-d87f4a0e6886",
          "e8db68d2-b275-481f-bce5-adc32ab53774"
        ],
        [
          "e8db68d2-b275-481f-bce5-adc32ab53774",
          "8359061e-7fad-4385-811e-ecc962d788ae"
        ]
      ],
      srcDstTypeNames: [
        ["Analysis", "Method"],
        ["Analysis", "Data Set"],
        ["Data Set", "Method"]
      ],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "using",
      uuid: "029458c5-ba1b-4edd-a4f5-b296a4226044",
      createdAt: 1583947849664,
      updatedAt: 1583947849664
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      name: "has",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1584033768134,
      uuid: "e9bb8ee9-a31c-4037-8f1e-91f2926ac7bd",
      createdAt: 1583947874232
    },
    {
      srcDstTypes: [
        [
          "72707741-f51e-405f-b1b5-d87f4a0e6886",
          "e8db68d2-b275-481f-bce5-adc32ab53774"
        ]
      ],
      srcDstTypeNames: [["Analysis", "Data Set"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "with",
      uuid: "5b93fad6-b712-4bc0-a8de-d54803529581",
      createdAt: 1583947891995,
      updatedAt: 1583947891995
    },
    {
      srcDstTypes: [
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "0a8539aa-ed67-4ea4-8aca-477251c6d09a"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "19fafde7-633c-4406-82cf-1e006dff0def"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "72707741-f51e-405f-b1b5-d87f4a0e6886"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "e8db68d2-b275-481f-bce5-adc32ab53774"
        ]
      ],
      srcDstTypeNames: [
        ["User", "Article"],
        ["User", "Tool"],
        ["User", "Analysis"],
        ["User", "Data Set"]
      ],
      name: "contact for",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1585677387638,
      uuid: "2e464338-d0b9-4405-86d1-75d8e477b66d",
      createdAt: 1583954280892
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "relevant to",
      uuid: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
      createdAt: 1584028750977,
      updatedAt: 1584028750977
    },
    {
      srcDstTypes: [
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011"
        ]
      ],
      srcDstTypeNames: [["User", "Service"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "needs",
      uuid: "ac89d055-b3fa-41be-9659-38b8763b44a9",
      createdAt: 1584035495815,
      updatedAt: 1584035495815
    },
    {
      srcDstTypes: [
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011"
        ]
      ],
      srcDstTypeNames: [["User", "Service"]],
      name: "provides",
      description: "",
      properties: {
        level: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1587646562703,
      uuid: "160ba329-462f-4fb0-97ce-cbdaa79121eb",
      createdAt: 1584035502174
    },
    {
      srcDstTypes: [
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "c11db948-919b-4467-bac0-4ae44205b138"
        ]
      ],
      srcDstTypeNames: [["User", "Organization"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "part of",
      uuid: "d5c8bea6-5cf1-4433-835d-7d7544682c9f",
      createdAt: 1584035519241,
      updatedAt: 1584035519241
    },
    {
      srcDstTypes: [
        [
          "f11559b0-a2d1-4a2d-8432-1a100358dada",
          "bb2225cc-4f18-42d2-a51f-efd82a0b9b45"
        ]
      ],
      srcDstTypeNames: [["Research Paper", "Research Paper Source"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "sourced from",
      uuid: "f18ae9c6-6bea-48a9-971a-9fc04c6d4f50",
      createdAt: 1585166354815,
      updatedAt: 1585166354815
    },
    {
      srcDstTypes: [
        [
          "f11559b0-a2d1-4a2d-8432-1a100358dada",
          "d58bb744-8233-411a-856f-5a74f31250bd"
        ]
      ],
      srcDstTypeNames: [["Research Paper", "Research Paper License"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "licensed with",
      uuid: "ddb414a3-2b11-441a-a351-8f58153a3e2c",
      createdAt: 1585166354829,
      updatedAt: 1585166354829
    },
    {
      srcDstTypes: [
        [
          "f11559b0-a2d1-4a2d-8432-1a100358dada",
          "8d3d78f0-b2d0-4180-abbf-8a4829f13d5c"
        ]
      ],
      srcDstTypeNames: [["Research Paper", "Journal"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "published in",
      uuid: "ce98641b-f79d-4f86-82a5-7c125396e14b",
      createdAt: 1585166354841,
      updatedAt: 1585166354841
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      name: "resulted in",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1585237196947,
      uuid: "896368ac-ce0d-42e4-84da-85cf76fd4f84",
      createdAt: 1585166970205
    },
    {
      srcDstTypes: [
        [
          "c11db948-919b-4467-bac0-4ae44205b138",
          "4f98cf79-2664-49ef-bcff-957dd79296c2"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "0e621498-3d1b-4574-83ae-90191be203e0"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "1eda9d46-6296-42bc-9893-eda57efc041a"
        ],
        [
          "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          "4f98cf79-2664-49ef-bcff-957dd79296c2"
        ]
      ],
      srcDstTypeNames: [
        ["Organization", "Hub of Activity"],
        ["User", "Project"],
        ["User", "Spark"],
        ["User", "Hub of Activity"]
      ],
      name: "member of",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1586287369993,
      uuid: "27504bcb-425b-4149-9276-2eb30c058190",
      createdAt: 1585242248864
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      description: "",
      properties: {
        "*": {
          allowed: true
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "wants to work on",
      uuid: "0b949553-4a94-4252-8fb0-5c1204e7e2bb",
      createdAt: 1585327776149,
      updatedAt: 1585327776149
    },
    {
      srcDstTypes: [
        [
          "66347f88-2146-4c55-bdd3-81d2094f773e",
          "c11db948-919b-4467-bac0-4ae44205b138"
        ]
      ],
      srcDstTypeNames: [["Clinical Trial", "Organization"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "sponsored by",
      uuid: "c1a88bd5-1d97-477a-87ee-7004f955fd12",
      createdAt: 1585687987497,
      updatedAt: 1585687987497
    },
    {
      srcDstTypes: [
        [
          "66347f88-2146-4c55-bdd3-81d2094f773e",
          "6aa31ef0-2997-4b7d-8229-c5360bb9a55c"
        ]
      ],
      srcDstTypeNames: [["Clinical Trial", "Country"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "located in",
      uuid: "eaada90a-0ef7-4b0a-86cd-67019592a793",
      createdAt: 1585688306506,
      updatedAt: 1585688306506
    },
    {
      srcDstTypes: [
        [
          "66347f88-2146-4c55-bdd3-81d2094f773e",
          "177ff477-9adc-4ac2-aa7c-607c1ef64515"
        ]
      ],
      srcDstTypeNames: [["Clinical Trial", "Intervention"]],
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "used",
      uuid: "133de173-e676-4b31-bf46-fd3148c288a9",
      createdAt: 1585688361046,
      updatedAt: 1585688361046
    },
    {
      srcDstTypes: null,
      srcDstTypeNames: null,
      name: "inspired by",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1586878044277,
      uuid: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
      createdAt: 1586294338561
    },
    {
      srcDstTypes: [
        [
          "0e621498-3d1b-4574-83ae-90191be203e0",
          "322d89ef-ba11-4105-b0ac-ea52f0572cd4"
        ],
        [
          "0e621498-3d1b-4574-83ae-90191be203e0",
          "8fa01f28-d96c-4219-8e2d-2114cc61589b"
        ],
        [
          "1eda9d46-6296-42bc-9893-eda57efc041a",
          "322d89ef-ba11-4105-b0ac-ea52f0572cd4"
        ],
        [
          "1eda9d46-6296-42bc-9893-eda57efc041a",
          "8fa01f28-d96c-4219-8e2d-2114cc61589b"
        ]
      ],
      srcDstTypeNames: [
        ["Project", "Meeting"],
        ["Project", "Discussion"],
        ["Spark", "Meeting"],
        ["Spark", "Discussion"]
      ],
      name: "discussed in",
      description: "",
      properties: {
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1586358320288,
      uuid: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
      createdAt: 1586295004697
    }
  ],
  elements: [
    {
      name: "User",
      description: "",
      searchOptions: {
        connectedElements: [
          {
            elementType: "4f98cf79-2664-49ef-bcff-957dd79296c2",
            connectionType: "09bb2565-64dc-442c-8b83-9e4430459a59",
            elementProperties: ["aux.label"]
          },
          {
            elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
            connectionType: "160ba329-462f-4fb0-97ce-cbdaa79121eb",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
            connectionType: "8f4d817c-cc13-478d-a442-00dba9e30279",
            elementProperties: ["aux.label"]
          },
          {
            elementType: "0e621498-3d1b-4574-83ae-90191be203e0",
            connectionType: "27504bcb-425b-4149-9276-2eb30c058190",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "0e621498-3d1b-4574-83ae-90191be203e0",
            connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "1eda9d46-6296-42bc-9893-eda57efc041a",
            connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "c11db948-919b-4467-bac0-4ae44205b138",
            connectionType: "d5c8bea6-5cf1-4433-835d-7d7544682c9f",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "bc191beb-2fbd-4640-8934-d976aad68153",
            connectionType: "09bb2565-64dc-442c-8b83-9e4430459a59",
            elementProperties: ["aux.label"]
          }
        ]
      },
      properties: {
        avatar: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        displayname: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        email: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        email_invite: {
          required: false,
          type: "text",
          includeInGraph: false
        },
        bio: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        auxPropertyMap: {
          avatar: "properties.avatar",
          email: "properties.email",
          label: "properties.displayname",
          description: "properties.bio"
        },
        properties: {
          email: {
            anonymize: true,
            anonymousValue: "anonymous"
          }
        },
        aux: {},
        connections: [
          {
            connectionType: "8f4d817c-cc13-478d-a442-00dba9e30279",
            elementType: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba"
          },
          {
            connectionType: "d5c8bea6-5cf1-4433-835d-7d7544682c9f",
            elementType: "c11db948-919b-4467-bac0-4ae44205b138"
          },
          {
            connectionType: "ac89d055-b3fa-41be-9659-38b8763b44a9",
            elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011"
          },
          {
            elementType: "0e621498-3d1b-4574-83ae-90191be203e0",
            connectionType: "09bb2565-64dc-442c-8b83-9e4430459a59"
          }
        ]
      },
      aux: {
        avatar: {
          required: false,
          type: "text",
          includeInGraph: false
        },
        privacy: {
          required: true,
          default: "anonymous",
          type: "text",
          values: ["private", "public", "anonymous"],
          includeInGraph: false
        },
        email: {
          required: false,
          type: "text",
          includeInGraph: false
        },
        user: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1587587527632,
      uuid: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
      createdAt: 1583945876240
    },
    {
      description: "",
      properties: {
        xap: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        view: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        suggestion: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        status: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        respondedAt: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {},
        aux: {}
      },
      name: "CollaborationRequest",
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1584070914341,
      uuid: "43370da8-6447-410c-abb9-a66a7ee7742d",
      createdAt: 1583945876249
    },
    {
      name: "Data Set",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: true,
          type: "longtext",
          includeInGraph: false,
          unique: true
        },
        image: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "displayname",
                  form: "e4b3ac11-3566-463f-b9bb-e3bd50de5c9e",
                  schema: {
                    type: "connection",
                    elementType: "e8db68d2-b275-481f-bce5-adc32ab53774",
                    connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Data Set",
            description: "Relevant Data Sets",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "e8db68d2-b275-481f-bce5-adc32ab53774",
                  connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                  direction: "out",
                  properties: {}
                },
                elementType: "e8db68d2-b275-481f-bce5-adc32ab53774"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {
          description: {
            user_editable: true,
            label: "Description",
            anonymize: false
          },
          url: {
            user_editable: true,
            label: "URL",
            interface: {
              type: "url"
            },
            anonymize: false
          }
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          default: "",
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1588689569471,
      uuid: "e8db68d2-b275-481f-bce5-adc32ab53774",
      createdAt: 1583947365965
    },
    {
      name: "Analysis",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: true,
          type: "longtext",
          includeInGraph: false,
          unique: true
        },
        image: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "displayname",
                  form: "ca46ce9f-6608-4814-9e52-5b71467130a5",
                  schema: {
                    type: "connection",
                    elementType: "72707741-f51e-405f-b1b5-d87f4a0e6886",
                    connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Analysis",
            description: "Relevant Analyses",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "72707741-f51e-405f-b1b5-d87f4a0e6886",
                  connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                  direction: "out",
                  properties: {}
                },
                elementType: "72707741-f51e-405f-b1b5-d87f4a0e6886"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {
          description: {
            user_editable: true,
            label: "Description",
            anonymize: false
          },
          url: {
            user_editable: true,
            label: "URL",
            interface: {
              type: "url"
            },
            anonymize: false
          }
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          default: "",
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1588688856073,
      uuid: "72707741-f51e-405f-b1b5-d87f4a0e6886",
      createdAt: 1583947389193
    },
    {
      name: "Method",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "displayname",
                  form: "31217206-ddd8-4b56-bc81-74e9e7e643e8",
                  schema: {
                    type: "connection",
                    elementType: "8359061e-7fad-4385-811e-ecc962d788ae",
                    connectionType: "029458c5-ba1b-4edd-a4f5-b296a4226044",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Methods",
            description: "Select all that apply or create new",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "8359061e-7fad-4385-811e-ecc962d788ae",
                  connectionType: "029458c5-ba1b-4edd-a4f5-b296a4226044",
                  direction: "out",
                  properties: {}
                },
                elementType: "8359061e-7fad-4385-811e-ecc962d788ae"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname"
        },
        properties: {
          displayname: {
            user_editable: true,
            label: "Confirm",
            anonymize: false
          }
        },
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1585757438601,
      uuid: "8359061e-7fad-4385-811e-ecc962d788ae",
      createdAt: 1583947404165
    },
    {
      name: "Meta Data",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "displayname",
                  schema: {
                    type: "connection",
                    elementType: "1c957737-2249-4f72-bf67-84216b61e3de",
                    connectionType: "e9bb8ee9-a31c-4037-8f1e-91f2926ac7bd",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Meta Data",
            description: "The meta data in the data set",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "1c957737-2249-4f72-bf67-84216b61e3de",
                  connectionType: "e9bb8ee9-a31c-4037-8f1e-91f2926ac7bd",
                  direction: "out",
                  properties: {}
                },
                elementType: "1c957737-2249-4f72-bf67-84216b61e3de"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname"
        },
        properties: {
          displayname: {
            user_editable: true,
            anonymize: false
          }
        },
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1584028858109,
      uuid: "1c957737-2249-4f72-bf67-84216b61e3de",
      createdAt: 1583947417670
    },
    {
      name: "Country",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        "country code": {
          required: true,
          type: "text",
          includeInGraph: true
        },
        flag: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        squareFlag: {
          required: false,
          type: "boolean",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: false,
            allowNew: true,
            title: "Country",
            description: "",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
                  connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                  direction: "out",
                  properties: {}
                },
                elementType: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname"
        },
        properties: {
          displayname: {
            user_editable: true,
            anonymize: false
          }
        },
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1584628798264,
      uuid: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
      createdAt: 1584027726244
    },
    {
      name: "Article",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: true,
          type: "longtext",
          includeInGraph: false,
          unique: true
        },
        image: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        publisher: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: false,
            title: "Article",
            description: "Relevant Articles",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
                  connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                  direction: "out",
                  properties: {}
                },
                elementType: "0a8539aa-ed67-4ea4-8aca-477251c6d09a"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {
          description: {
            user_editable: true,
            label: "Description",
            anonymize: false
          },
          url: {
            interface: {
              type: "url"
            },
            user_editable: true,
            label: "URL",
            anonymize: false
          }
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1588687782608,
      uuid: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
      createdAt: 1584029406115
    },
    {
      name: "Tool",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: true,
          type: "longtext",
          includeInGraph: false,
          unique: true
        },
        image: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "displayname",
                  form: "8a7a0dd0-5cd7-49f0-bb88-4f0ff00364f4",
                  schema: {
                    type: "connection",
                    elementType: "19fafde7-633c-4406-82cf-1e006dff0def",
                    connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Tool",
            description: "Relevant Tools",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "19fafde7-633c-4406-82cf-1e006dff0def",
                  connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                  direction: "out",
                  properties: {}
                },
                elementType: "19fafde7-633c-4406-82cf-1e006dff0def"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {
          description: {
            user_editable: true,
            label: "Description",
            anonymize: false
          },
          url: {
            user_editable: true,
            label: "URL",
            interface: {
              type: "url"
            },
            anonymize: false
          }
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1588689306620,
      uuid: "19fafde7-633c-4406-82cf-1e006dff0def",
      createdAt: 1584030609392
    },
    {
      name: "Organization",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        image: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "displayname",
                  form: "df92eaf4-9479-4553-a084-7b8520f42970",
                  schema: {
                    type: "connection",
                    elementType: "c11db948-919b-4467-bac0-4ae44205b138",
                    connectionType: "d5c8bea6-5cf1-4433-835d-7d7544682c9f",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Organization",
            description: "",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "c11db948-919b-4467-bac0-4ae44205b138",
                  connectionType: "d5c8bea6-5cf1-4433-835d-7d7544682c9f",
                  direction: "out",
                  properties: {}
                },
                elementType: "c11db948-919b-4467-bac0-4ae44205b138"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {
          description: {
            user_editable: true,
            label: "Description",
            anonymize: false
          },
          url: {
            user_editable: true,
            label: "URL",
            interface: {
              type: "url"
            },
            anonymize: false
          }
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1588689655712,
      uuid: "c11db948-919b-4467-bac0-4ae44205b138",
      createdAt: 1584030632194
    },
    {
      name: "Service",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        image: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "connectionList",
            title: "Services",
            description:
              "What skills and knowledge you want to share with others and/or what ones you need?",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  form: "",
                  valueProperty: "displayname",
                  schema: {
                    type: "connection",
                    elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
                    connectionType: "ac89d055-b3fa-41be-9659-38b8763b44a9",
                    direction: "out",
                    properties: {}
                  },
                  options: {
                    label: "{{{aux.label}}}"
                  }
                }
              ]
            },
            choices: [
              {
                type: "elementType",
                schema: {
                  type: "connection",
                  elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
                  connectionType: "ac89d055-b3fa-41be-9659-38b8763b44a9",
                  direction: "out",
                  properties: {}
                },
                options: {
                  label: "{{{aux.label}}}"
                },
                elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011"
              },
              {
                type: "elementType",
                schema: {
                  type: "connection",
                  elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
                  connectionType: "160ba329-462f-4fb0-97ce-cbdaa79121eb",
                  direction: "out",
                  properties: {}
                },
                options: {
                  label: "{{{aux.label}}}"
                },
                elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011"
              }
            ],
            compactDisplay: false,
            display: "",
            name: "Services",
            elementType: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011"
          }
        },
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {
          displayname: {
            user_editable: true,
            label: "Name",
            anonymize: false
          },
          description: {
            user_editable: true,
            label: "Description",
            anonymize: false
          },
          url: {
            user_editable: true,
            label: "URL",
            interface: {
              type: "url"
            },
            anonymize: false
          }
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1589391414724,
      uuid: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
      createdAt: 1584030644591
    },
    {
      name: "Role",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "radiogroup",
            multiple: false,
            allowNew: false,
            title: "Role",
            description: "What brings you to the COVID-19 city?",
            choices: [
              {
                aux: {
                  label: "Epidemiologist"
                },
                id: "Epidemiologist"
              },
              {
                aux: {
                  label: "Concerned Citizen"
                },
                id: "Concerned Citizen"
              },
              {
                aux: {
                  label: "Science Writer"
                },
                id: "Science Writer"
              },
              {
                aux: {
                  label: "Researcher"
                },
                id: "Researcher"
              },
              {
                aux: {
                  label: "Health Professional"
                },
                id: "Health Professional"
              },
              {
                aux: {
                  label: "Business"
                },
                id: "Business"
              },
              {
                aux: {
                  label: "Data Scientist"
                },
                id: "Data Scientist"
              },
              {
                aux: {
                  label: "Scientist"
                },
                id: "Scientist"
              },
              {
                aux: {
                  label: "Modeler"
                },
                id: "Modeler"
              },
              {
                aux: {
                  label: "Clinician"
                },
                id: "Clinician"
              },
              {
                aux: {
                  label: "Policy Advisor"
                },
                id: "Policy Advisor"
              },
              {
                aux: {
                  label: "Software Developer"
                },
                id: "Software Developer"
              },
              {
                aux: {
                  label: "Project Manager"
                },
                id: "Project Manager"
              }
            ],
            compactDisplay: false,
            other: false,
            name: "Role",
            elementType: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
            schema: {
              type: "connection",
              elementType: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
              connectionType: "8f4d817c-cc13-478d-a442-00dba9e30279",
              direction: "in",
              properties: {}
            }
          }
        },
        auxPropertyMap: {
          label: "properties.displayname"
        },
        properties: {
          displayname: {
            user_editable: true,
            label: "Confirm",
            anonymize: false
          }
        },
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1584389352950,
      uuid: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
      createdAt: 1584035431748
    },
    {
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      aux: {
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          default: "",
          type: "longtext",
          includeInGraph: false
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {},
        aux: {}
      },
      name: "Desired Tool",
      uuid: "782c6471-cf78-4dcf-bbd5-23ac8491e5e1",
      createdAt: 1584391947011,
      updatedAt: 1584391947011
    },
    {
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      aux: {
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          default: "",
          type: "longtext",
          includeInGraph: false
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {},
        aux: {}
      },
      name: "Research Question",
      uuid: "d46d41c4-3b43-49d0-8519-1a02a57d87cc",
      createdAt: 1584391947020,
      updatedAt: 1584391947020
    },
    {
      name: "Research Paper",
      description: "",
      properties: {
        body: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        doi: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        url: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        useId: {
          required: false,
          type: "text",
          includeInGraph: false
        },
        title: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        abstract: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        WHO_covidence: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        sha: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        full_title: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        publish_time: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        pubmed_id: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        authors: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        microsoft_paper_id: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        has_full_text: {
          required: false,
          type: "boolean",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {
          body: {
            anonymize: false,
            user_editable: true
          },
          doi: {
            anonymize: false,
            user_editable: true
          },
          title: {
            anonymize: false,
            user_editable: true
          },
          abstract: {
            anonymize: false,
            user_editable: true
          },
          url: {
            user_editable: true,
            label: "URL",
            interface: {
              type: "url"
            },
            anonymize: false
          },
          WHO_covidence: {
            anonymize: false,
            user_editable: true
          },
          sha: {
            anonymize: false,
            user_editable: true
          },
          full_title: {
            anonymize: false,
            user_editable: true
          },
          publish_time: {
            anonymize: false,
            user_editable: true
          },
          pubmed_id: {
            anonymize: false,
            user_editable: true
          },
          authors: {
            anonymize: false,
            user_editable: true
          },
          microsoft_paper_id: {
            anonymize: false,
            user_editable: true
          },
          has_full_text: {
            anonymize: false,
            user_editable: true
          }
        },
        auxPropertyMap: {
          label: "properties.title",
          description: "properties.abstract"
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          default: "",
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1588692628383,
      uuid: "f11559b0-a2d1-4a2d-8432-1a100358dada",
      createdAt: 1585166354775
    },
    {
      name: "Research Paper Source",
      description: "",
      properties: {
        displayname: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {
          displayname: {
            anonymize: false,
            user_editable: true
          }
        },
        auxPropertyMap: {
          label: "properties.displayname"
        },
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1585245724006,
      uuid: "bb2225cc-4f18-42d2-a51f-efd82a0b9b45",
      createdAt: 1585166354787
    },
    {
      name: "Research Paper License",
      description: "",
      properties: {
        displayname: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        properties: {
          displayname: {
            anonymize: false,
            user_editable: true
          }
        },
        auxPropertyMap: {
          label: "properties.displayname"
        },
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1585245788487,
      uuid: "d58bb744-8233-411a-856f-5a74f31250bd",
      createdAt: 1585166354798
    },
    {
      description: "",
      properties: {
        displayname: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        properties: {
          displayname: {
            anonymize: false,
            user_editable: true
          }
        },
        auxPropertyMap: {
          label: "properties.displayname"
        },
        aux: {}
      },
      name: "Journal",
      uuid: "8d3d78f0-b2d0-4180-abbf-8a4829f13d5c",
      createdAt: 1585166354803,
      updatedAt: 1585166354803
    },
    {
      name: "Project",
      searchOptions: {
        connectedElements: [
          {
            elementType: "19fafde7-633c-4406-82cf-1e006dff0def",
            connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "19fafde7-633c-4406-82cf-1e006dff0def",
            connectionType: "896368ac-ce0d-42e4-84da-85cf76fd4f84",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "1eda9d46-6296-42bc-9893-eda57efc041a",
            connectionType: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "322d89ef-ba11-4105-b0ac-ea52f0572cd4",
            connectionType: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "8359061e-7fad-4385-811e-ecc962d788ae",
            connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
            elementProperties: ["aux.label"]
          },
          {
            elementType: "8fa01f28-d96c-4219-8e2d-2114cc61589b",
            connectionType: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "e8db68d2-b275-481f-bce5-adc32ab53774",
            connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
            elementProperties: ["aux.label", "aux.description"]
          }
        ]
      },
      description: "",
      properties: {
        name: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        purpose: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        image: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        "collaboration output": {
          required: false,
          type: "boolean",
          includeInGraph: false
        },
        therapeutic_accelerator: {
          required: false,
          type: "boolean",
          includeInGraph: false
        },
        ta_1: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        ta_2: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        "project stage": {
          required: false,
          type: "any",
          includeInGraph: false
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        auxPropertyMap: {
          avatar: "properties.image",
          label: "properties.name",
          description: "properties.purpose"
        },
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "name",
                  form: "7beeddd3-f89c-4e3e-857b-0a797158a488",
                  schema: {
                    type: "connection",
                    elementType: "0e621498-3d1b-4574-83ae-90191be203e0",
                    connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Project",
            description:
              "What projects are you involved with? You can select existing projects or create new ones.",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "0e621498-3d1b-4574-83ae-90191be203e0",
                  connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                  direction: "out",
                  properties: {}
                },
                elementType: "0e621498-3d1b-4574-83ae-90191be203e0"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        },
        properties: {
          "team stage": {
            user_editable: false,
            anonymize: false
          }
        },
        aux: {}
      },
      aux: {
        avatar: {
          required: false,
          type: "text",
          includeInGraph: false
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1588092123341,
      uuid: "0e621498-3d1b-4574-83ae-90191be203e0",
      createdAt: 1585166546769
    },
    {
      name: "Code",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: true,
          type: "longtext",
          includeInGraph: false,
          unique: true
        },
        image: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        auxPropertyMap: {
          avatar: "properties.image",
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {},
        aux: {},
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: {
              enabled: true,
              choices: [
                {
                  valueProperty: "displayname",
                  form: "4a4ac68d-f165-4b83-b9e3-20ab64d7d96e",
                  schema: {
                    type: "connection",
                    elementType: "1ed30f38-16fa-406f-88c3-950ab4096a42",
                    connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                    direction: "out",
                    properties: {}
                  }
                }
              ]
            },
            title: "Code",
            description: "Relevant Code",
            choices: [
              {
                type: "elementType",
                options: {
                  label: "{{{aux.label}}}"
                },
                schema: {
                  type: "connection",
                  elementType: "1ed30f38-16fa-406f-88c3-950ab4096a42",
                  connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
                  direction: "out",
                  properties: {}
                },
                elementType: "1ed30f38-16fa-406f-88c3-950ab4096a42"
              }
            ],
            compactDisplay: false,
            display: ""
          }
        }
      },
      aux: {
        avatar: {
          required: false,
          type: "text",
          includeInGraph: false
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1586877812029,
      uuid: "1ed30f38-16fa-406f-88c3-950ab4096a42",
      createdAt: 1585166546792
    },
    {
      name: "Hub of Activity",
      description: "",
      properties: {
        displayname: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        image: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        auxPropertyMap: {
          label: "properties.displayname",
          avatar: "properties.image"
        },
        properties: {},
        aux: {},
        appearance: {
          interface: {
            type: "radiogroup",
            isRequired: true,
            multiple: false,
            allowNew: false,
            title: "Activity Hub",
            description: "What Activity Hub does this map to?",
            choices: [
              {
                aux: {
                  label: "Care"
                },
                id: "220eb577-465c-4a09-88f4-577662adb887"
              },
              {
                aux: {
                  label: "Community"
                },
                id: "bef54521-33be-42e2-b2e3-4ca27e450dc0"
              },
              {
                aux: {
                  label: "Diagnostic"
                },
                id: "e92d5ebd-0aca-45f1-984a-5486feff90a8"
              },
              {
                aux: {
                  label: "Drug"
                },
                id: "2813e3c3-5dd1-4805-989b-852482556619"
              },
              {
                aux: {
                  label: "Economy"
                },
                id: "7adff4ac-a343-486b-b59f-78a1aed9cff2"
              },
              {
                aux: {
                  label: "Vaccine"
                },
                id: "5584acdf-bea6-469d-a4fc-f2e084103124"
              }
            ],
            compactDisplay: false,
            other: false,
            name: "Role",
            elementType: "4f98cf79-2664-49ef-bcff-957dd79296c2",
            schema: {
              type: "connection",
              elementType: "4f98cf79-2664-49ef-bcff-957dd79296c2",
              connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
              direction: "in",
              properties: {}
            }
          }
        }
      },
      aux: {
        avatar: {
          required: false,
          type: "text",
          includeInGraph: false
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1586357953163,
      uuid: "4f98cf79-2664-49ef-bcff-957dd79296c2",
      createdAt: 1585252595280
    },
    {
      name: "Clinical Trial",
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        alt_displayname: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        TrialID: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        Acronym: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        IDDO: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "Pharma Intervention": {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "Date Registration": {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "Source Register": {
          required: false,
          type: "text",
          includeInGraph: true
        },
        url: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "Recruitment Satus": {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "Sample Size": {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "Study Type": {
          required: false,
          type: "text",
          includeInGraph: true
        },
        Phase: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        auxPropertyMap: {
          label: "properties.displayname",
          description: "properties.description"
        },
        properties: {
          description: {
            user_editable: true,
            label: "Description",
            anonymize: false
          },
          url: {
            user_editable: true,
            label: "URL",
            interface: {
              type: "url"
            },
            anonymize: false
          }
        },
        aux: {}
      },
      searchOptions: {},
      aux: {
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1588692460356,
      uuid: "66347f88-2146-4c55-bdd3-81d2094f773e",
      createdAt: 1585687779157
    },
    {
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      aux: {
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        auxPropertyMap: {
          label: "properties.displayname"
        },
        properties: {},
        aux: {}
      },
      name: "Intervention",
      uuid: "177ff477-9adc-4ac2-aa7c-607c1ef64515",
      createdAt: 1585687779168,
      updatedAt: 1585687779168
    },
    {
      name: "Spark",
      searchOptions: {
        connectedElements: [
          {
            elementType: "0e621498-3d1b-4574-83ae-90191be203e0",
            connectionType: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "1eda9d46-6296-42bc-9893-eda57efc041a",
            connectionType: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "322d89ef-ba11-4105-b0ac-ea52f0572cd4",
            connectionType: "c353133ed-e07c-4fe7-80ab-96f0f12916fd",
            elementProperties: ["aux.label", "aux.description"]
          },
          {
            elementType: "8359061e-7fad-4385-811e-ecc962d788ae",
            connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
            elementProperties: ["aux.label"]
          },
          {
            elementType: "8fa01f28-d96c-4219-8e2d-2114cc61589b",
            connectionType: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
            elementProperties: ["aux.label", "aux.description"]
          }
        ]
      },
      description:
        "A spark is the beginning of an idea. Share it with the community and see how it grows.",
      properties: {
        name: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        rating: {
          required: false,
          type: "any",
          includeInGraph: false
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: true,
            compactDisplay: false
          }
        },
        auxPropertyMap: {
          label: "properties.name",
          description: "properties.description"
        },
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        }
      },
      updatedAt: 1588090709315,
      uuid: "1eda9d46-6296-42bc-9893-eda57efc041a",
      createdAt: 1586286738401
    },
    {
      description: "",
      properties: {
        name: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        date: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      aux: {
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: true,
            compactDisplay: false
          }
        },
        auxPropertyMap: {
          label: "properties.name",
          description: "properties.description"
        },
        properties: {},
        aux: {}
      },
      name: "Discussion",
      uuid: "8fa01f28-d96c-4219-8e2d-2114cc61589b",
      createdAt: 1586287189409,
      updatedAt: 1586287189409
    },
    {
      description: "",
      properties: {
        name: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        url: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        date: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      aux: {
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        },
        description: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        appearance: {
          interface: {
            type: "autocomplete",
            multiple: true,
            allowNew: true,
            compactDisplay: false
          }
        },
        auxPropertyMap: {
          label: "properties.name",
          description: "properties.description"
        },
        properties: {},
        aux: {}
      },
      name: "Meeting",
      uuid: "322d89ef-ba11-4105-b0ac-ea52f0572cd4",
      createdAt: 1586358227729,
      updatedAt: 1586358227729
    },
    {
      name: "Recording",
      description: "",
      extraData: {
        properties: {},
        aux: {},
        auxPropertyMap: {
          label: "properties.name"
        }
      },
      properties: {
        name: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        url: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        password: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        "*": {
          allowed: false
        }
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1586817009425,
      uuid: "e76c9448-9958-4336-8ceb-d075b4ba9bfb",
      createdAt: 1586810564480
    },
    {
      name: "Research Data Alliance",
      description: "",
      searchOptions: {},
      properties: {
        displayname: {
          required: false,
          type: "text",
          includeInGraph: true
        },
        image: {
          required: false,
          type: "longtext",
          includeInGraph: false
        },
        "*": {
          allowed: false
        }
      },
      extraData: {
        auxPropertyMap: {
          label: "properties.displayname"
        },
        appearance: {
          interface: {
            type: "radiogroup",
            isRequired: true,
            multiple: false,
            allowNew: false,
            title: "Working Group",
            description: "What Working Group does this map to?",
            choices: [
              {
                aux: {
                  label: "RDA-WG-CLINICAL"
                },
                id: "7ba6c103-3e7f-4201-b8fc-43cd4e3c36d6"
              },
              {
                aux: {
                  label: "RDA-WG-COMMUNITY"
                },
                id: "ab762a0d-190b-4e76-b59d-e38457bf2df9"
              },
              {
                aux: {
                  label: "RDA-WG-EPI"
                },
                id: "80a4a8d1-4502-42ef-9382-4a0a37e3f365"
              },
              {
                aux: {
                  label: "RDA-WG-SOCIAL"
                },
                id: "d325723b-979b-41b4-9cfa-638ca29fadbf"
              },
              {
                aux: {
                  label: "RDA-WG-OMICS"
                },
                id: "df228d49-aa1a-4201-a191-835219f185e0"
              },
              {
                aux: {
                  label: "RDA-WG-GENERAL"
                },
                id: "14608012-3df3-45d7-b82a-ce09216517da"
              },
              {
                aux: {
                  label: "RDA-WG-RESEARCH"
                },
                id: "9e7f3f80-ff95-40e2-a2a9-065c9997294b"
              }
            ],
            compactDisplay: false,
            other: false,
            name: "Role",
            elementType: "bc191beb-2fbd-4640-8934-d976aad68153",
            schema: {
              type: "connection",
              elementType: "bc191beb-2fbd-4640-8934-d976aad68153",
              connectionType: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
              direction: "in",
              properties: {}
            }
          }
        },
        properties: {},
        aux: {}
      },
      aux: {
        createdBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        updatedBy: {
          required: true,
          type: "text",
          includeInGraph: true
        },
        label: {
          required: true,
          default: "",
          type: "text",
          includeInGraph: true
        }
      },
      updatedAt: 1587560053404,
      uuid: "bc191beb-2fbd-4640-8934-d976aad68153",
      createdAt: 1587487370105
    }
  ]
};

const profile = {
  elements: [
    {
      type: "8d3d78f0-b2d0-4180-abbf-8a4829f13d5c",
      count: 4565,
      connections: []
    },
    {
      type: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
      count: 1827,
      connections: [
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "0e621498-3d1b-4574-83ae-90191be203e0",
          count: 7
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "09bb2565-64dc-442c-8b83-9e4430459a59",
          dst: "0e621498-3d1b-4574-83ae-90191be203e0",
          count: 23
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "27504bcb-425b-4149-9276-2eb30c058190",
          dst: "1eda9d46-6296-42bc-9893-eda57efc041a",
          count: 40
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "41bc5c34-b8f6-4fae-a296-f1a08eee5a66",
          dst: "43370da8-6447-410c-abb9-a66a7ee7742d",
          count: 194
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "8f4d817c-cc13-478d-a442-00dba9e30279",
          dst: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
          count: 6
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "160ba329-462f-4fb0-97ce-cbdaa79121eb",
          dst: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
          count: 2026
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "ac89d055-b3fa-41be-9659-38b8763b44a9",
          dst: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
          count: 2599
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "09bb2565-64dc-442c-8b83-9e4430459a59",
          dst: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          count: 361
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "0b949553-4a94-4252-8fb0-5c1204e7e2bb",
          dst: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          count: 173
        },
        {
          src: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          type: "d5c8bea6-5cf1-4433-835d-7d7544682c9f",
          dst: "c11db948-919b-4467-bac0-4ae44205b138",
          count: 854
        }
      ]
    },
    {
      type: "c11db948-919b-4467-bac0-4ae44205b138",
      count: 891,
      connections: [
        {
          src: "c11db948-919b-4467-bac0-4ae44205b138",
          type: "09bb2565-64dc-442c-8b83-9e4430459a59",
          dst: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          count: 2
        },
        {
          src: "c11db948-919b-4467-bac0-4ae44205b138",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
          count: 409
        },
        {
          src: "c11db948-919b-4467-bac0-4ae44205b138",
          type: "09bb2565-64dc-442c-8b83-9e4430459a59",
          dst: "bc191beb-2fbd-4640-8934-d976aad68153",
          count: 1
        }
      ]
    },
    {
      type: "d58bb744-8233-411a-856f-5a74f31250bd",
      count: 13,
      connections: []
    },
    {
      type: "43370da8-6447-410c-abb9-a66a7ee7742d",
      count: 184,
      connections: [
        {
          src: "43370da8-6447-410c-abb9-a66a7ee7742d",
          type: "492f9051-0a11-4361-824a-dfe90ef87a88",
          dst: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          count: 191
        },
        {
          src: "43370da8-6447-410c-abb9-a66a7ee7742d",
          type: "bc91bf12-3111-4d27-a8b9-bf8ae696e24a",
          dst: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          count: 2
        }
      ]
    },
    {
      type: "4c8cb21c-32fe-4cda-9f15-b3dfcd5de011",
      count: 312,
      connections: []
    },
    {
      type: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
      count: 180,
      connections: [
        {
          src: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "19fafde7-633c-4406-82cf-1e006dff0def",
          count: 4
        },
        {
          src: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          count: 68
        },
        {
          src: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
          count: 33
        },
        {
          src: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          count: 1
        },
        {
          src: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "8359061e-7fad-4385-811e-ecc962d788ae",
          count: 314
        },
        {
          src: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "bc191beb-2fbd-4640-8934-d976aad68153",
          count: 116
        },
        {
          src: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "e8db68d2-b275-481f-bce5-adc32ab53774",
          count: 4
        }
      ]
    },
    {
      type: "8359061e-7fad-4385-811e-ecc962d788ae",
      count: 271,
      connections: []
    },
    {
      type: "72707741-f51e-405f-b1b5-d87f4a0e6886",
      count: 14,
      connections: [
        {
          src: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "19fafde7-633c-4406-82cf-1e006dff0def",
          count: 2
        },
        {
          src: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          count: 5
        },
        {
          src: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
          count: 2
        },
        {
          src: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "8359061e-7fad-4385-811e-ecc962d788ae",
          count: 54
        },
        {
          src: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "bc191beb-2fbd-4640-8934-d976aad68153",
          count: 13
        }
      ]
    },
    {
      type: "e8db68d2-b275-481f-bce5-adc32ab53774",
      count: 43,
      connections: [
        {
          src: "e8db68d2-b275-481f-bce5-adc32ab53774",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          count: 1
        },
        {
          src: "e8db68d2-b275-481f-bce5-adc32ab53774",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "19fafde7-633c-4406-82cf-1e006dff0def",
          count: 4
        },
        {
          src: "e8db68d2-b275-481f-bce5-adc32ab53774",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          count: 20
        },
        {
          src: "e8db68d2-b275-481f-bce5-adc32ab53774",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
          count: 10
        },
        {
          src: "e8db68d2-b275-481f-bce5-adc32ab53774",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          count: 2
        },
        {
          src: "e8db68d2-b275-481f-bce5-adc32ab53774",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "8359061e-7fad-4385-811e-ecc962d788ae",
          count: 111
        },
        {
          src: "e8db68d2-b275-481f-bce5-adc32ab53774",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "bc191beb-2fbd-4640-8934-d976aad68153",
          count: 40
        }
      ]
    },
    {
      type: "782c6471-cf78-4dcf-bbd5-23ac8491e5e1",
      count: 2,
      connections: []
    },
    {
      type: "19fafde7-633c-4406-82cf-1e006dff0def",
      count: 83,
      connections: [
        {
          src: "19fafde7-633c-4406-82cf-1e006dff0def",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          count: 40
        },
        {
          src: "19fafde7-633c-4406-82cf-1e006dff0def",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
          count: 35
        },
        {
          src: "19fafde7-633c-4406-82cf-1e006dff0def",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          count: 6
        },
        {
          src: "19fafde7-633c-4406-82cf-1e006dff0def",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "8359061e-7fad-4385-811e-ecc962d788ae",
          count: 286
        },
        {
          src: "19fafde7-633c-4406-82cf-1e006dff0def",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "bc191beb-2fbd-4640-8934-d976aad68153",
          count: 75
        },
        {
          src: "19fafde7-633c-4406-82cf-1e006dff0def",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "e8db68d2-b275-481f-bce5-adc32ab53774",
          count: 20
        }
      ]
    },
    {
      type: "d46d41c4-3b43-49d0-8519-1a02a57d87cc",
      count: 6,
      connections: [
        {
          src: "d46d41c4-3b43-49d0-8519-1a02a57d87cc",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          count: 1
        }
      ]
    },
    {
      type: "bb2225cc-4f18-42d2-a51f-efd82a0b9b45",
      count: 7,
      connections: []
    },
    {
      type: "4f98cf79-2664-49ef-bcff-957dd79296c2",
      count: 6,
      connections: [
        {
          src: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          count: 110
        },
        {
          src: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "0e621498-3d1b-4574-83ae-90191be203e0",
          count: 12
        },
        {
          src: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "19fafde7-633c-4406-82cf-1e006dff0def",
          count: 42
        },
        {
          src: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "1eda9d46-6296-42bc-9893-eda57efc041a",
          count: 14
        },
        {
          src: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "72707741-f51e-405f-b1b5-d87f4a0e6886",
          count: 9
        },
        {
          src: "4f98cf79-2664-49ef-bcff-957dd79296c2",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "e8db68d2-b275-481f-bce5-adc32ab53774",
          count: 22
        }
      ]
    },
    {
      type: "177ff477-9adc-4ac2-aa7c-607c1ef64515",
      count: 1352,
      connections: []
    },
    {
      type: "66347f88-2146-4c55-bdd3-81d2094f773e",
      count: 798,
      connections: [
        {
          src: "66347f88-2146-4c55-bdd3-81d2094f773e",
          type: "133de173-e676-4b31-bf46-fd3148c288a9",
          dst: "177ff477-9adc-4ac2-aa7c-607c1ef64515",
          count: 1845
        },
        {
          src: "66347f88-2146-4c55-bdd3-81d2094f773e",
          type: "eaada90a-0ef7-4b0a-86cd-67019592a793",
          dst: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
          count: 524
        },
        {
          src: "66347f88-2146-4c55-bdd3-81d2094f773e",
          type: "c1a88bd5-1d97-477a-87ee-7004f955fd12",
          dst: "c11db948-919b-4467-bac0-4ae44205b138",
          count: 572
        }
      ]
    },
    {
      type: "0e621498-3d1b-4574-83ae-90191be203e0",
      count: 12,
      connections: [
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "19fafde7-633c-4406-82cf-1e006dff0def",
          count: 4
        },
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "896368ac-ce0d-42e4-84da-85cf76fd4f84",
          dst: "19fafde7-633c-4406-82cf-1e006dff0def",
          count: 1
        },
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
          dst: "1eda9d46-6296-42bc-9893-eda57efc041a",
          count: 1
        },
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
          dst: "322d89ef-ba11-4105-b0ac-ea52f0572cd4",
          count: 3
        },
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "8359061e-7fad-4385-811e-ecc962d788ae",
          count: 29
        },
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
          dst: "8fa01f28-d96c-4219-8e2d-2114cc61589b",
          count: 1
        },
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "bc191beb-2fbd-4640-8934-d976aad68153",
          count: 1
        },
        {
          src: "0e621498-3d1b-4574-83ae-90191be203e0",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "e8db68d2-b275-481f-bce5-adc32ab53774",
          count: 2
        }
      ]
    },
    {
      type: "f11559b0-a2d1-4a2d-8432-1a100358dada",
      count: 41084,
      connections: [
        {
          src: "f11559b0-a2d1-4a2d-8432-1a100358dada",
          type: "ce98641b-f79d-4f86-82a5-7c125396e14b",
          dst: "8d3d78f0-b2d0-4180-abbf-8a4829f13d5c",
          count: 32890
        },
        {
          src: "f11559b0-a2d1-4a2d-8432-1a100358dada",
          type: "f18ae9c6-6bea-48a9-971a-9fc04c6d4f50",
          dst: "bb2225cc-4f18-42d2-a51f-efd82a0b9b45",
          count: 41084
        },
        {
          src: "f11559b0-a2d1-4a2d-8432-1a100358dada",
          type: "ddb414a3-2b11-441a-a351-8f58153a3e2c",
          dst: "d58bb744-8233-411a-856f-5a74f31250bd",
          count: 41084
        }
      ]
    },
    {
      type: "6aa31ef0-2997-4b7d-8229-c5360bb9a55c",
      count: 178,
      connections: []
    },
    {
      type: "1eda9d46-6296-42bc-9893-eda57efc041a",
      count: 14,
      connections: [
        {
          src: "1eda9d46-6296-42bc-9893-eda57efc041a",
          type: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
          dst: "0e621498-3d1b-4574-83ae-90191be203e0",
          count: 6
        },
        {
          src: "1eda9d46-6296-42bc-9893-eda57efc041a",
          type: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
          dst: "1eda9d46-6296-42bc-9893-eda57efc041a",
          count: 1
        },
        {
          src: "1eda9d46-6296-42bc-9893-eda57efc041a",
          type: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
          dst: "322d89ef-ba11-4105-b0ac-ea52f0572cd4",
          count: 3
        },
        {
          src: "1eda9d46-6296-42bc-9893-eda57efc041a",
          type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
          dst: "8359061e-7fad-4385-811e-ecc962d788ae",
          count: 27
        },
        {
          src: "1eda9d46-6296-42bc-9893-eda57efc041a",
          type: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
          dst: "8fa01f28-d96c-4219-8e2d-2114cc61589b",
          count: 2
        }
      ]
    },
    {
      type: "322d89ef-ba11-4105-b0ac-ea52f0572cd4",
      count: 6,
      connections: [
        {
          src: "322d89ef-ba11-4105-b0ac-ea52f0572cd4",
          type: "e9bb8ee9-a31c-4037-8f1e-91f2926ac7bd",
          dst: "e76c9448-9958-4336-8ceb-d075b4ba9bfb",
          count: 4
        }
      ]
    },
    {
      type: "e76c9448-9958-4336-8ceb-d075b4ba9bfb",
      count: 4,
      connections: []
    },
    {
      type: "8fa01f28-d96c-4219-8e2d-2114cc61589b",
      count: 3,
      connections: []
    },
    {
      type: "bc191beb-2fbd-4640-8934-d976aad68153",
      count: 7,
      connections: []
    },
    {
      type: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
      count: 13,
      connections: [
        {
          src: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
          type: "8f4d817c-cc13-478d-a442-00dba9e30279",
          dst: "0a8539aa-ed67-4ea4-8aca-477251c6d09a",
          count: 297
        },
        {
          src: "49e9ef23-bd0d-4807-ab2c-f8825788c2ba",
          type: "8f4d817c-cc13-478d-a442-00dba9e30279",
          dst: "ccb1fd11-148e-4a25-a316-8f4be56f1542",
          count: 1271
        }
      ]
    }
  ],
  connections: [
    {
      type: "efd17972-7e1d-461d-9ad0-5f260e6df2e5",
      count: 1955
    },
    {
      type: "896368ac-ce0d-42e4-84da-85cf76fd4f84",
      count: 1
    },
    {
      type: "ca18dce8-473d-46f4-95ca-33eafb76b7a8",
      count: 8
    },
    {
      type: "353133ed-e07c-4fe7-80ab-96f0f12916fd",
      count: 9
    },
    {
      type: "e9bb8ee9-a31c-4037-8f1e-91f2926ac7bd",
      count: 4
    },
    {
      type: "492f9051-0a11-4361-824a-dfe90ef87a88",
      count: 191
    },
    {
      type: "bc91bf12-3111-4d27-a8b9-bf8ae696e24a",
      count: 2
    },
    {
      type: "8f4d817c-cc13-478d-a442-00dba9e30279",
      count: 1574
    },
    {
      type: "133de173-e676-4b31-bf46-fd3148c288a9",
      count: 1845
    },
    {
      type: "eaada90a-0ef7-4b0a-86cd-67019592a793",
      count: 524
    },
    {
      type: "c1a88bd5-1d97-477a-87ee-7004f955fd12",
      count: 572
    },
    {
      type: "09bb2565-64dc-442c-8b83-9e4430459a59",
      count: 387
    },
    {
      type: "27504bcb-425b-4149-9276-2eb30c058190",
      count: 40
    },
    {
      type: "41bc5c34-b8f6-4fae-a296-f1a08eee5a66",
      count: 194
    },
    {
      type: "160ba329-462f-4fb0-97ce-cbdaa79121eb",
      count: 2026
    },
    {
      type: "ac89d055-b3fa-41be-9659-38b8763b44a9",
      count: 2599
    },
    {
      type: "0b949553-4a94-4252-8fb0-5c1204e7e2bb",
      count: 173
    },
    {
      type: "d5c8bea6-5cf1-4433-835d-7d7544682c9f",
      count: 854
    },
    {
      type: "ce98641b-f79d-4f86-82a5-7c125396e14b",
      count: 32890
    },
    {
      type: "f18ae9c6-6bea-48a9-971a-9fc04c6d4f50",
      count: 41084
    },
    {
      type: "ddb414a3-2b11-441a-a351-8f58153a3e2c",
      count: 41084
    }
  ]
};

export default { schema, profile, additional };
