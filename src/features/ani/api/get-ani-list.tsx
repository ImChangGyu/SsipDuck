import { gql, useSuspenseQuery } from '@apollo/client';
import { ANI_VARIABLES } from '~/features/ani/constants/ani-variable';
import { AniItemType, VariableType } from '~/types/ani';

const getAniListQuery = gql`
  query Query(
    $page: Int
    $isAdult: Boolean
    $type: MediaType
    $sort: [MediaSort]
    $format: MediaFormat
    $search: String
    $season: MediaSeason
    $seasonYear: Int
  ) {
    Page(page: $page) {
      media(
        isAdult: $isAdult
        type: $type
        sort: $sort
        format: $format
        search: $search
        season: $season
        seasonYear: $seasonYear
      ) {
        id
        title {
          romaji
        }
        description
        genres
        coverImage {
          extraLarge
        }
      }
    }
  }
`;

interface AniListProps {
  variableType: VariableType;
}

interface AniListType {
  Page: { media: AniItemType[] };
}

export function useAniList({ variableType }: AniListProps) {
  return useSuspenseQuery<AniListType>(getAniListQuery, {
    variables: ANI_VARIABLES(1)[variableType](),
  });
}
