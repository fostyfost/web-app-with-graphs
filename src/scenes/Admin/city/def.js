const schema = {
  fields: [
    {
      name: "Name",
      type: "text",
      query: {
        type: "property",
        property: "displayname"
      },
      uuid: "displayname",
      inputType: "textbox"
    },
    {
      name: "Url",
      type: "text",
      query: {
        type: "property",
        property: "url"
      },
      uuid: "url",
      inputType: "textbox"
    },
    {
      name: "Email",
      type: "text",
      query: {
        type: "property",
        property: "email"
      },
      uuid: "email",
      inputType: "textbox"
    },
    {
      name: "Description",
      type: "longtext",
      query: {
        type: "property",
        property: "description"
      },
      uuid: "description",
      inputType: "textarea"
    },
    {
      name: "Rating",
      type: "number",
      query: {
        type: "property",
        property: "rating"
      },
      uuid: "rating",
      inputType: "slider"
    },
    {
      name: "Tags",
      uuid: "tags",
      inputType: "autocomplete",
      type: "connection",
      query: {
        type: "connection",
        connection: [
          {
            direction: "out",
            elementTypes: [{ name: "Method", uuid: "method" }],
            connectionTypes: [{ name: "tagged with", uuid: "taggedWith" }]
          }
        ]
      },
      multiple: true,
      options: {}
    }
  ],
  elements: [
    {
      name: "User",
      uuid: "user",
      description: "",
      fields: [{ uuid: "displayname" }, { uuid: "email" }],
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
        bio: {
          required: false,
          type: "longtext",
          includeInGraph: false
        }
      },
      extraData: {
        color: "#3e6fad",
        icon: "faUser"
      },
      aux: {}
    },
    {
      name: "Service",
      uuid: "service",
      description: "",
      fields: [{ uuid: "displayname" }, { uuid: "url" }],
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
        }
      },
      extraData: {
        icon: "faTools",
        color: "#88c68e"
      },
      aux: {}
    },
    {
      name: "Spark",
      uuid: "spark",
      description:
        "A spark is the beginning of an idea. Share it with the community and see how it grows.",
      fields: [
        { uuid: "displayname" },
        { uuid: "description" },
        { uuid: "rating" },
        { uuid: "tags" }
      ],
      properties: {
        displayname: {
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
          type: "number",
          includeInGraph: false
        }
      },
      extraData: {
        icon: "faLightbulb",
        color: "#ffde82"
      },
      aux: {}
    },
    {
      name: "Method",
      uuid: "method",
      fields: [{ uuid: "displayname" }],
      description: "",
      properties: {
        displayname: {
          required: true,
          type: "text",
          includeInGraph: true
        }
      },
      extraData: {
        icon: "faTags",
        color: "#eab4c9"
      },
      aux: {}
    },
    {
      name: "Organization",
      uuid: "organization",
      fields: [{ uuid: "displayname" }, { uuid: "url" }],
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
        }
      },
      extraData: {
        icon: "faBuilding",
        color: "#fb9c6c"
      },
      aux: {}
    }
  ],
  connections: [
    {
      name: "experienced in",
      uuid: "experiencedin",
      srcDstTypes: [["user", "method"]],
      description: "",
      properties: {},
      aux: {},
      extraData: {}
    },
    {
      name: "works for",
      uuid: "worksFor",
      srcDstTypes: [["user", "organization"]],
      properties: {},
      extraData: {},
      aux: {}
    },
    {
      name: "needs",
      uuid: "needs",
      srcDstTypes: [["user", "service"]],
      properties: {},
      extraData: {},
      aux: {}
    },
    {
      name: "provides",
      uuid: "provides",
      srcDstTypes: [["user", "service"]],
      properties: {},
      extraData: {},
      aux: {}
    },
    {
      name: "interested in",
      uuid: "interestedIn",
      srcDstTypes: [["user", "method"]],
      properties: {},
      extraData: {},
      aux: {}
    },
    {
      name: "created",
      uuid: "created",
      srcDstTypes: [["user", "spark"]],
      properties: {},
      extraData: {},
      aux: {}
    },
    {
      name: "tagged with",
      uuid: "taggedWith",
      srcDstTypes: [["spark", "method"]],
      properties: {},
      extraData: {},
      aux: {}
    }
  ]
};

export default { schema };
