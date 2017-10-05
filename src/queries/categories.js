import gql from 'graphql-tag';

const allCategories = gql`
  query allCategories{
    categories{
      id
      name
    }
  }
`;

export {
  allCategories
}
