import React, { useState } from "react"
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBBadge,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { displayItem } from "./redux/actions";
import cartData from "./data";
import CartContainer from "./CartContainer";


const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { totalCount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      <MDBNavbar expand="lg" dark bgColor="primary">
        <MDBContainer>
          <MDBNavbarBrand
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            Redux Shopping Cart
          </MDBNavbarBrand>

          <MDBBtn
            className="text-dark"
            color="light"
            style={{ width: "120px" }}
            onClick={() => dispatch(displayItem(cartData))}
          >
            Get Items
          </MDBBtn>
          <MDBNavbarLink>
            <a className="mx-3" href="#">
              <MDBIcon
                fas
                icon="shopping-cart"
                size="lg"
                color="white"
                onClick={() => setOpen(true)}
                
              />
              <MDBBadge
                pill
                color="danger"
                notification
                style={{ fontSize: "12px" }}
              >
                {totalCount}
                {open && <CartContainer /> }
              </MDBBadge>
            </a>
          </MDBNavbarLink>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
};

export default NavBar;
