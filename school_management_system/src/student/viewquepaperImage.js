import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";
import { Link } from "react-router-dom";

export class viewquePaperImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paperImages: [],
      paperImageIdPk: 0,
      questionPaperIdFk: 0,
      isActive: 0,
      files: [],
    };
  }

  onGetImages(id) {
    fetch(Variables.STUD_API_URL + "getPaperImageList/" + id, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            paperImages: result.data,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.setState({ questionPaperIdFk: this.props.match.params.id });
      this.onGetImages(this.props.match.params.id);
    }
  }

  setFile(e) {
    this.setState({ files: e.target.files });
  }

  render() {
    const { paperImages, questionPaperIdFk } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Question Paper Image List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Question Paper Image List
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="content-body"></div>
            <section id="image-gallery" class="card">
              <div class="card-header">
                <h4 class="card-title">Question Paper Image gallery</h4>
                <a class="heading-elements-toggle">
                  <i class="icon-ellipsis font-medium-3"></i>
                </a>
                <div class="heading-elements">
                  <ul class="list-inline mb-0">
                    <li>
                      <a data-action="collapse">
                        <i class="icon-minus4"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="reload">
                        <i class="icon-reload"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="expand">
                        <i class="icon-expand2"></i>
                      </a>
                    </li>
                    <li>
                      <a data-action="close">
                        <i class="icon-cross2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body collapse in">
                <div
                  class="card-block  my-gallery"
                  itemscope
                  itemtype="http://schema.org/ImageGallery"
                  style={{ overflow: "scroll" }}
                >
                  <div class="row">
                    {paperImages.map((img, index) => (
                      <figure
                        class="col-lg-3 col-md-6 col-xs-12"
                        itemprop="associatedMedia"
                        itemscope
                        itemtype="http://schema.org/ImageObject"
                      >
                        <a
                          href={Variables.PHOTO_URL + img.paperImageName}
                          itemprop="contentUrl"
                          data-size="300x300"
                        >
                          <tr key={index}>
                            <td>
                              <img
                                src={Variables.PHOTO_URL + img.paperImageName}
                                className="img-thumbnail img-fluid"
                                height="600px"
                                width="600px"
                                itemprop="thumbnail"
                                alt="Image description"
                              />
                            </td>
                          </tr>
                        </a>
                        <br />
                        <br />
                        <br />
                        <br />
                      </figure>

                    ))}
                    


                    <br />
                  </div>


                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default viewquePaperImage;
