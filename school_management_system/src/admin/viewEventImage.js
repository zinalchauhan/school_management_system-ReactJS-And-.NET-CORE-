import react from "react";
import Header from "./includes/header";
import Footer from "./includes/footer";
import { Component } from "react/cjs/react.production.min";
import { Variables } from "../Variables";
import { Link } from "react-router-dom";

export class viewEventImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventImages: [],
      eventImageIdPk: 0,
      eventIdFk: 0,
      isActive: 0,
      files: [],
    };
  }

  onGetImages(id) {
    fetch(Variables.API_URL + "eventImageList/" + id, {
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
            eventImages: result.data,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  componentDidMount() {
    if (this.props.match.params.id !== undefined) {
      this.setState({ eventIdFk: this.props.match.params.id });
      this.onGetImages(this.props.match.params.id);
    }
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "deleteEventImgList/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.result === "success") {
            this.onGetImages(this.state.eventIdFk);
          }
        });
    }
  }

  setFile(e) {
    this.setState({ files: e.target.files });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.files.length);
    for (let index = 0; index < this.state.files.length; index++) {
      this.insertImage(this.state.files[index]);
    }
    this.props.history.push("/admin/edit-eventImage/"+this.state.eventIdFk);
  };

  insertImage(file) {

    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("eventIdFk", this.state.eventIdFk);

    fetch(Variables.API_URL + "insertEventImgList", {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          
        },
        (error) => {
          console.log(error);
          //alert("Failed");
        }
      );
  }

  render() {
    const { eventImages, eventIdFk } = this.state;
    return (
      <div>
        <Header></Header>
        <div className="robust-content content container-fluid">
          <div className="content-wrapper">
            <div className="content-header row">
              <div className="content-header-left col-md-6 col-xs-12">
                <h2 className="content-header-title mb-0">Event Image List</h2>
                <div className="row breadcrumbs-top">
                  <div className="breadcrumb-wrapper col-xs-12">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="breadcrumb-item active">
                        Event Image List
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
                <h4 class="card-title">Event Image gallery</h4>
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
                    {eventImages.map((img, index) => (
                      <figure
                        class="col-lg-3 col-md-6 col-xs-12"
                        itemprop="associatedMedia"
                        itemscope
                        itemtype="http://schema.org/ImageObject"
                      >
                        <a
                          href={Variables.PHOTO_URL + img.eventImage}
                          itemprop="contentUrl"
                          data-size="300x300"
                        >
                          <tr key={index}>
                            <td>
                              <img
                                src={Variables.PHOTO_URL + img.eventImage}
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
                        <center>
                          <tr>
                            <button
                              type="button"
                              onClick={() => this.delete(img.eventImageIdPk)}
                              class="btn btn-outline-danger remove-item-btn"
                            >
                              {" "}
                              Delete{" "}
                            </button>
                          </tr>
                        </center>
                        <br />
                        <br />
                      </figure>

                    ))}
                    <button type="button" class="btn  btn-success block btn-lg" data-toggle="modal"
                      data-target="#iconFileUpload">
                      Upload Image
                    </button>


                    <br />
                  </div>


                </div>
              </div>
            </section>
            <div class="modal fade text-xs-left" id="iconFileUpload" tabindex="-1" role="dialog" aria-labelledby="myModalLabel34"
              aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <h3 class="modal-title" id="myModalLabel34">Event Image Upload</h3>
                  </div>

                  <form onSubmit={this.onSubmit.bind(this)}>
                    <div class="modal-body">
                      <div class="form-group">

                        <div class="controls">
                          <input
                            type="file"
                            name="img"
                            multiple
                            onChange={(e) => this.setFile(e)}
                            className="form-control"
                            aria-invalid="false"
                            required
                          />
                        </div>
                      </div>

                    </div>
                    <div class="modal-footer">
                      <input type="reset" class="btn btn-outline-secondary btn-lg" data-dismiss="modal" value="close" /> &nbsp;&nbsp;&nbsp;
                      <input type="submit" class="btn btn-outline-primary btn-lg" value="Upload" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default viewEventImage;
