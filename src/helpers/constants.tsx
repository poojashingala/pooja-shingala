import { BiCopy } from "react-icons/bi";

export const columnDefinitions = [
  {
    id: "name",
    header: "Name",
    cell: (e:any ) => {
      return(
        <div className="color-blue">{e.name}</div>
      )
    },
    sortingField: "name",
    width: '30%'
  },
  {
    id: "description",
    header: "Description",
    cell: (e:any) => e.description,
    width: '40%'
  },
  { id: "last-modified", header: "Last Modified", cell: (e:any) => e['last-modified'], width: '40%' },
  {
    id: "clone-url",
    header: "Clone URL",
    cell: (e:any) => {
    return(
      <div className="flex color-blue links">
        <a className="mr-12" href={e.https}><BiCopy />HTTPS</a>
        <a className="mr-12" href={e.ssh}><BiCopy />SSH</a>
        <a className="mr-12" href={e.httpsgrc}><BiCopy />HTTPS(GRC)</a>
      </div>
    )},
    width: '20%'
  }
];

export const allItems = [
    {
      name: "readydoc-ui",
      'description': "-",
      'last-modified': "14 hours ago",
      'clone-url' : {https: '#', ssh: '#', httpsgrc: '#'}, 
    },
    {
      name: "readydoc-api",
      'description': "-",
      'last-modified': "15 hours ago",
      'clone-url' : {https: '#', ssh: '#', httpsgrc: '#'}, 
    },
    {
      name: "digitalform-api",
      'description': "-",
      'last-modified': "3 days ago",
      'clone-url' : {https: '#', ssh: '#', httpsgrc: '#'}, 
    },
    {
      name: "digitalform-ui",
      'description': "-",
      'last-modified': "6 days ago",
      'clone-url' : {https: '#', ssh: '#', httpsgrc: '#'}, 
    },
    
    
  ];

  export const dropdownItems = [
    { id: "clonehttps", text: "Clone HTTPS" },
    { id: "clonessh", text: "Clone SSH" },
    { id: "clonehttpsgrc", text: "Clone HTTPS (GRC)" },
    { id: "connectionsteps", text: "Connection steps" },
  ]

  export const menuItems: any = [
    {
        text: "Source • CodeCommit",
        type: "expandable-link-group",
        href: "#",
        defaultExpanded: true,
        items: [
          {
            text: "Getting Started",
            type: "link",
            href: "#",
          },
          {
            text: "Repositories",
            type: "link",
            href: "/"
          },
          {
            text: "Approval rule template",
            type: "link",
            href: "#",
          },
        ]
    }, 
    {
        text: "Artifacts • CodeArtifacts",
        type: "expandable-link-group",
        href: "#",
        items: []
    }, 
    
    {
        text: "Build • CodeBuild",
        type: "expandable-link-group",
        href: "#",
        items: []
    },
    {
        text: "Deploy • CodeDeploy",
        type: "expandable-link-group",
        href: "#",
        items: []
    },
    {
        text: "Pipeline • CodePipeline",
        type: "expandable-link-group",
        href: "#",
        items: []
    },
    {
        text: "Settings",
        type: "expandable-link-group",
        href: "#",
        items: []
    },
  ]

export const ChevronDown = () => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" focusable="false" aria-hidden="true"><path className="filled stroke-linejoin-round" d="M4 5h8l-4 6-4-6z"></path></svg>
  )
}

export const breadcrumbs = [
  {text: "Developer Tools", href:"/"}, 
  {text: "CodeCommit", href:"/"},
  {text: "Repositories", href:"/"}
]