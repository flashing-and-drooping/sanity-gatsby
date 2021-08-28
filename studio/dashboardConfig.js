export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '612a63746c68e4875e240656',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio-rsfd8xhd',
                  apiId: '49d10e4a-b924-413d-85ef-91b1460dccda'
                },
                {
                  buildHookId: '612a6374f76d1cc5d4c42970',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web-e82rnnvq',
                  apiId: 'ffb498ef-d2da-411b-8761-a322f972c4e0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/flashing-and-drooping/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-e82rnnvq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
