import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, device, spacing, theme } from "../../theme";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logo from "../../../assets/images/all-logo-shopee.png";
import logoQR from "../../../assets/images/code-qr.png";
import logoApple from "../../../assets/images/logo-apple.png";
import logoGoogle from "../../../assets/images/logo-chplay.png";
import logoHuaWei from "../../../assets/images/logo-huawei.png";
import { SmallText } from "../../common/components/text/SmallText";
import { SmallestText } from "../../common/components/text/SmallestText";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Root>
      <RootTop>
          <WrapperTop>
              <ListCategory>
                  <li>
                    <TextWhite>
                      {t("shopee.footer.labels.chamSocKhachHang")}
                    </TextWhite>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.shopeeBlog")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.shopeeMall")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.huongDanMuaHang")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.huongDanBanHang")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.thanhToan")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.shopeeXu")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.vanChuyen")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.traHangHoanTien")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.chamSocKhachHang")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.chinhSachBaoHanh")}
                    </TextWhiteSmall>
                  </Link>
                </li>
            </ListCategory>
            <ListCategory>
                <li>
                    <TextWhite>
                      {t("shopee.footer.labels.veShopee")}
                    </TextWhite>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.gioiThieuShopee")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.tuyenDung")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.dieuKhoan")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.chinhSachBaoMat1")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.gioiThieuShopee")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.chinhHang")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.kenhNguoiBan")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.flashSales")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.tiepThiShopee")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.lienHeTruyenThong")}
                    </TextWhiteSmall>
                  </Link>
                </li>
            </ListCategory>
            <ListCategory>
                <TextWhite>
                    {t("shopee.footer.labels.thanhToan")}
                </TextWhite>
                <ListImage>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                </ListImage>
                <TextWhite>
                    {t("shopee.footer.labels.donViVanChuyen")}
                </TextWhite>
                <ListImage1>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                  <li>
                      <Logo>
                      </Logo>
                  </li>
                </ListImage1>
            </ListCategory>
            <ListCategory>
                <TextWhite>
                    {t("shopee.footer.labels.theoDoiChungToi")}
                </TextWhite>
                <TextWhiteSmall>
                  <FacebookIcon style={{fontSize: 20 }} />
                  {t("shopee.footer.actions.facebook")}
                </TextWhiteSmall>
                <TextWhiteSmall>
                  <InstagramIcon style={{fontSize: 20 }} />
                  {t("shopee.footer.actions.instagram")}
                </TextWhiteSmall>
                <TextWhiteSmall>
                  <LinkedInIcon style={{fontSize: 20}} />
                  {t("shopee.footer.actions.linkedIn")}
                </TextWhiteSmall>
            </ListCategory>
            <ListCategory>
                <TextWhite>
                    {t("shopee.footer.labels.taiShopee")}
                </TextWhite>
                <ListImage2>
                      <Img src={logoQR}/>
                    <Content>
                      <Img src={logoApple}/>
                      <Img src={logoGoogle}/>
                      <Img src={logoHuaWei}/>
                    </Content>
                </ListImage2>
            </ListCategory>
          </WrapperTop>
          <WrapperTopInfo>
              <TextWhite>
                {t("shopee.footer.labels.quyenBaoLuu")}
              </TextWhite>
              <ListCategory>
                <li>
                  <TextWhite>
                    {t("shopee.footer.labels.quocGiaKhuVuc")}
                  </TextWhite>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.sin")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.indo")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.daiLoan")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.thai")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.malay")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.viet")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.phi")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.brazil")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.mexico")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.colombia")}
                    </TextWhiteSmall>
                  </Link>
                </li>
                <li>
                  <Link>
                    <TextWhiteSmall>
                      {t("shopee.footer.actions.chile")}
                    </TextWhiteSmall>
                  </Link>
                </li>
              </ListCategory>
          </WrapperTopInfo>
      </RootTop>
      <RootBottom>
          <WrapperBottom>
            <ListCategory>
            <li>
              <Link>
                <TextWhite>
                  {t("shopee.footer.actions.chinhSachBaoMat2")}
                </TextWhite>
              </Link>
            </li>
            <li>
              <Link>
                <TextWhite>
                  {t("shopee.footer.actions.quyCheHoatDong")}
                </TextWhite>
              </Link>
            </li>
            <li>
              <Link>
                <TextWhite>
                  {t("shopee.footer.actions.chinhSachVanChuyen")}
                </TextWhite>
              </Link>
            </li>
            <li>
              <Link>
                <TextWhite>
                  {t("shopee.footer.actions.chinhSachHoanTra")}
                </TextWhite>
              </Link>
            </li>
            </ListCategory>
            <ListCategory>
              <li>
                <Logo></Logo>
              </li>
              <li>
                <Logo></Logo>
              </li>
              <li>
                <Logo></Logo>
              </li>
            </ListCategory>
              <Content>
                <TextWhiteSmall>
                  {t("shopee.footer.labels.ctyShopee")}
                </TextWhiteSmall>
              </Content>
              <Content>
                <TextWhiteSmall>
                  {t("shopee.footer.labels.diaChi")}
                </TextWhiteSmall>
              </Content>
              <Content>
                <TextWhiteSmall>
                  {t("shopee.footer.labels.quanLyNoiDung")}
                </TextWhiteSmall>
              </Content>
              <Content>
                <TextWhiteSmall>
                  {t("shopee.footer.labels.maDanhNghiem")}
                </TextWhiteSmall>
              </Content>
              <Content>
                <TextWhiteSmall>
                  {t("shopee.footer.labels.banQuyen")}
                </TextWhiteSmall>
              </Content>
          </WrapperBottom>
      </RootBottom>
    </Root>
  )

}
const Root = styled.footer`
  width: 100vw;
  background-color: ${color.white1};
`;
const ListCategory = styled.ul`
`;
const RootTop = styled.div`
  width: 100vw;
  background-color: ${color.graylight1};
`;
const RootBottom = styled.div`
  width: 100vw;
  background-color: ${color.graydark1};
  padding-top: ${spacing.m} 0;
`;
const Img = styled.img`
`;
const WrapperTop = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content:space-between;
  background-color: ${color.graylight1};
  padding: ${spacing.xl} 0;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns:1fr;
    ul{
        padding-top: ${spacing.l};
        margin-left: 10px;
      }
  };
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns:repeat(2,1fr);
    ul{
        padding-top: ${spacing.l};
        margin-left: 10px;
      }
  };
  @media (min-width: 1024px) {
    max-width: 1200px;
    height: 100%;
    margin: auto;
    display: flex;
    justify-content:space-between;
    background-color: ${color.graylight1};
    padding: ${spacing.xl} 0;
  };
  ul{
    li{
      padding-top:${spacing.m};
    }
    li:hover{
      color: ${color.orange1};
    }
  }
  ul:nth-child(3){
    flex-grow: calc(2 / 5 );
  };
`;
const WrapperTopInfo = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color: ${color.graylight1};
  padding: ${spacing.xl} 0;
  border-top:1px solid ${color.gray1};

  ul{
    display:flex;
    align-items: center;
    li:not(:last-child):not(:first-child){
      padding: 0 ${spacing.s};
      border-right: 1px solid ${color.gray1}; 
    }
    li:last-child{
      padding-left:${spacing.s};
    }
  }
  @media (max-width: 1024px) {
    display:none;
  };
`;
const Content = styled.div`
    text-align:center;
`;
const WrapperBottom = styled.div`
  max-width: 1200px;
  margin:0 auto;
  background-color: ${color.graydark1};
  padding: ${spacing.xl} 0;
  ul:first-child{
    display:flex;
    margin:0 auto;
    justify-content: center;
    li:not(:last-child){
      border-right: 1px solid ${color.gray1};
      padding: 0  ${spacing.xl};
    }
    li:last-child{
      padding: 0  ${spacing.xl};
    }
  }
  ul:nth-child(2){
    display: flex;
    margin: 0 auto;
    justify-content: center;
    padding: ${spacing.xl} 0;
    li{
      width: 150px;
      div{
        width: 100px;
        height:50px;
      }
    }
      li:first-child > div{
        background-size: 617.5% 393.3333333333333%;
        background-position: 34.13848631239936% 84.0909090909091%;
        background-image: url(${logo});
        object-fit: cover;
      }
      li:nth-child(2) > div{
        background-size: 617.5% 393.3333333333333%;
        background-position: 34.13848631239936% 84.0909090909091%;
        background-image: url(${logo});
        object-fit: cover;
      }
      li:nth-child(3) > div{
        background-size: 1543.75% 368.75%;
        background-position: 100% 35.65891472868217%;
        background-image: url(${logo});
        object-fit: cover;
      }
  }
  div:first-child{
    padding: 0  ${spacing.l};
  }
  @media (max-width: 1024px) {
    ul:first-child{
       display:none;
    }
  };
`;
const Logo = styled.div`
`;
const ListImage = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${spacing.l} 0 ;
  li{
      width: 30%;
      padding-right:${spacing.s};
      div{
        height:22px;
      }
  }
  li:first-child > div{
    background-size: 1347.2727272727273% 983.3333333333334%;
    background-position: 84.6938775510204% 6.289308176100629%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(2) > div{
    background-size: 1347.2727272727273% 610.3448275862069%;
    background-position: 49.416909620991255% 41.891891891891895%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(3) > div{
    background-size: 1347.2727272727273% 769.5652173913044%;
    background-position: 38.48396501457726% 38.311688311688314%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(4) > div{
    background-size: 1482% 804.5454545454545%;
    background-position: 1.447178002894356% 6.451612903225806%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(5) > div{
    background-size: 1482% 610.3448275862069%;
    background-position: 59.91316931982634% 63.513513513513516%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(6) > div{
    background-size: 1347.2727272727273% 610.3448275862069%;
    background-position: 19.97084548104956% 66.21621621621621%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:last-child> div{
    background-size: 741% 931.578947368421%;
    background-position: 71.9188767550702% 6.329113924050633%;
    background-image: url(${logo});
    object-fit: cover;
  }
`;

const ListImage1 = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: ${spacing.l};
  li{
      width: 30%;
      padding-right:${spacing.s};
      div{
        height:22px;
      }
  }
  li:first-child > div{
    background-size: 667.5675675675676% 983.3333333333334%;
    background-position: 65.71428571428571% 35.22012578616352%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(2) > div{
    background-size: 1347.2727272727273% 983.3333333333334%;
    background-position: 19.97084548104956% 37.735849056603776%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(3) > div{
    background-size: 1347.2727272727273% 610.3448275862069%;
    background-position: 9.037900874635568% 40.54054054054054%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(4) > div{
    background-size: 578.90625% 138.28125%;
    background-position: 88.90701468189233% 100%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(5) > div{
    background-size: 1347.2727272727273% 655.5555555555555%;
    background-position: 1.4577259475218658% 72.66666666666667%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(6) > div{
    background-size: 1347.2727272727273% 1106.25%;
    background-position: 95.6268221574344% 6.211180124223603%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(7) > div{
    background-size: 552.9850746268656% 610.3448275862069%;
    background-position: 29.9835255354201% 6.756756756756757%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:nth-child(8) > div{
    background-size: 1235% 680.7692307692307%;
    background-position: 55.947136563876654% 6.622516556291391%;
    background-image: url(${logo});
    object-fit: cover;
  }
  li:last-child> div{
    background-size: 1029.1666666666667% 590%;
    background-position: 13.452914798206278% 6.802721088435374%;
    background-image: url(${logo});
    object-fit: cover;
  }
`;
const ListImage2 = styled.div`
    display: flex;
    align-items:center;
    img{
      width:86px;
      height:86px;
    }
    div>img{
      width:80px;
      height:20px;
      margin:${spacing.s} 0;
    }
`;
const TextWhite = styled(SmallText)`
  color: ${color.gray1};
`;
const TextWhiteSmall = styled(SmallestText)`
  color: ${color.gray1};
`;