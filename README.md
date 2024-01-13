## The City Varsity Website

![](https://github.com/robwakefield/thecityvarsity/actions/workflows/nextjs.yml/badge.svg)

Promotional website for The City Varsity rugby match played between Imperial College London and London School of Economics.

Accessible at [www.thecityvarsity.co.uk](https://www.thecityvarsity.co.uk)

## How to update the website

The main variables to update are located in [src/app/config.tsx](/src/app/config.tsx) and images can be placed in the [public/](/public/) folder. To change any other parts of the website refer to [src/app/page.tsx](/src/app/page.tsx).

The website is built using the [NextJS](https://nextjs.org/docs) framework. Follow the guides to setup a local development environment and test the effects of new changes using `npm run dev` as described in the docs.

After making changes to the website, commit changes on the "dev" branch:
`git checkout dev && git commit -am "Update variables"`

### Deploying

To deploy the website to [www.thecityvarsity.co.uk](https://www.thecityvarsity.co.uk) merge the changes made on the "dev" branch into "main".

1. Ensure the changes have been committed to the "dev" branch:  
  `git checkout dev && git commit -am "Update variables"`
2. Merge the changes to "main" branch:  
  `git checkout main && git merge dev`
3. Push the "main" branch to deploy:  
  `git push`

[Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) on how to change the domain name.
