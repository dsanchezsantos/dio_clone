import logo from "../../assets/logo-dio.png";

import { HeaderContainer, HeaderContainerRow, HeaderMenu, HeaderMenuItem, HeaderLogo, HeaderMenuItemButton } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>

        <HeaderContainerRow>

            <HeaderMenu>

                <HeaderMenuItem>
                    <HeaderLogo src={logo} />
                </HeaderMenuItem>

            </HeaderMenu>

            <HeaderMenu>

                <HeaderMenuItem>
                    <HeaderMenuItemButton typeButton='home'>
                        Home
                    </HeaderMenuItemButton>
                </HeaderMenuItem>

                <HeaderMenuItem>
                    <HeaderMenuItemButton typeButton='outro'>
                        Entrar
                    </HeaderMenuItemButton>
                </HeaderMenuItem>

                <HeaderMenuItem>
                    <HeaderMenuItemButton typeButton='outro'>
                        Cadastrar
                    </HeaderMenuItemButton>
                </HeaderMenuItem>

            </HeaderMenu>

        </HeaderContainerRow>

    </HeaderContainer>
  )
}
