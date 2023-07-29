import { IconProps } from '@components'

import { AppTabBottomParamList } from './AppTab.routes'

//mapeamento dos itens do tab bar
export const mapScreenToProps: Record<
  keyof AppTabBottomParamList,
  {
    label: string
    icon: {
      focused: IconProps['name']
      unfocused: IconProps['name']
    }
  }
> = {
  Home: {
    label: 'Início',
    icon: {
      focused: 'homeFill',
      unfocused: 'home',
    },
  },
  NewPost: {
    label: 'Novo Post',
    icon: {
      focused: 'newPost',
      unfocused: 'newPost',
    },
  },
  Favorites: {
    label: 'Favoritos',
    icon: {
      focused: 'bookmarkFill',
      unfocused: 'bookmark',
    },
  },
  MyProfile: {
    label: 'Meu Perfil',
    icon: {
      focused: 'profileFill',
      unfocused: 'profile',
    },
  },
}
