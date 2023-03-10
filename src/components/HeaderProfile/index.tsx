import { MenuDesktop } from './MenuDesktop';
import { MenuMobileProfile } from './MenuMobile';
import { StyledHeaderProfile } from './style';

export const HeaderProfile = () => {
  
  return (
    <StyledHeaderProfile>
      <h1>Task Planner</h1>
      <div>
        <nav>
          <MenuMobileProfile/>
          <MenuDesktop/>
        </nav>
      </div>
    </StyledHeaderProfile>
  );
};
