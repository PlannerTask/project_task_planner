import { MenuDesktop } from './MenuDesktop';
import { MenuMobileProfile } from './MenuMobile';
import { StyledHeaderProfile } from './style';

export const HeaderProfile = () => {
  
  return (
    <StyledHeaderProfile>
      <h2>Task Planner</h2>
      <div>
        <nav>
          <MenuMobileProfile/>
          <MenuDesktop/>
        </nav>
      </div>
    </StyledHeaderProfile>
  );
};
