import { MenuHomeDesktop } from "./HomeMenuDesk";
import { MenuMobileHome } from "./HomeMenuMobile";
import { StyledHeaderHome } from "./style";

export const HeaderHome = () => {
  
    return (
      <StyledHeaderHome>
        <h1>Task Planner</h1>
        <div>
          <nav>
            <MenuMobileHome/>
            <MenuHomeDesktop/>
          </nav>
        </div>
      </StyledHeaderHome>
    );
  };