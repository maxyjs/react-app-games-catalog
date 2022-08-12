import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Loader } from "../components/Loader/Loader";
import { Slider } from "../components/Slider/Slider";
import { dataActions } from "../store/actions/dataActions";
import { requestActions } from "../store/actions/requestActions";

export const GamePage = () => {
  const {
    loading: { game: gameLoading, screenshots: screenshotsLoading },
  } = useSelector((state) => state.request);

  const { games, screenshotsPage, isLastScreenshotsPage } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();
  const { slug } = useParams();
  const game = games.find(({ slug: sl }) => sl === slug);

  const addScreenshotsHandler = useCallback(() => {
    if (!isLastScreenshotsPage && !screenshotsLoading) {
      dispatch(dataActions.setScreenshotsPage(screenshotsPage + 1));
      dispatch(requestActions.addGameScreenshots(slug, screenshotsPage + 1));
    }
  }, [
    dispatch,
    isLastScreenshotsPage,
    screenshotsLoading,
    screenshotsPage,
    slug,
  ]);

  useEffect(() => {
    if (!gameLoading && (!game || !game.withAdditions)) {
      dispatch(requestActions.addGameAdditions(slug));
    }
    if (game && !game.withScreenshots && !screenshotsLoading) {
      dispatch(requestActions.addGameScreenshots(slug, screenshotsPage));
    }
  }, [dispatch, game, screenshotsPage, gameLoading, screenshotsLoading]);

  return (
    <GamePageStyled>
      {game ? (
        <>
          <ImageContainer>
            {game?.background_image ? (
              <img src={game.background_image} alt={slug} />
            ) : (
              <span>No image</span>
            )}
          </ImageContainer>

          <ContentContainer>
            <div>
              <h2>{game?.name ? game.name : "--- no data ---"}</h2>
            </div>

            <div>
              <span>Rating:</span>&nbsp;
              <strong>{game?.rating || "no data"}</strong>
            </div>

            <div>
              <span>Release date:</span>&nbsp;
              <strong>
                {game?.released
                  ? new Date(game.released).toLocaleDateString()
                  : "no data"}
              </strong>
            </div>

            {game?.website ? (
              <div>
                <span>Website:</span>&nbsp;
                <LinkSiteGame href={game?.website || "#"} target="_blank">
                  {game.website}
                </LinkSiteGame>
              </div>
            ) : null}

            {game?.description_raw ? (
              <div>
                <span>Description:</span>&nbsp;
                <p>{game.description_raw}</p>
              </div>
            ) : (
              <p>"No description"</p>
            )}

            <div>
              {!game.withScreenshots ? (
                screenshotsLoading ? (
                  <Loader />
                ) : (
                  <>
                    <span>Screenshots:</span>&nbsp;
                    <span>No data</span>
                  </>
                )
              ) : (
                game.screenshots.length > 1 && (
                  <Slider
                    images={game.screenshots}
                    imagesEnd={addScreenshotsHandler}
                    loadingImages={screenshotsLoading}
                  />
                )
              )}
            </div>
          </ContentContainer>
        </>
      ) : !gameLoading ? (
        <ContentContainer>
          <div>
            <span>Page Not Found</span>
          </div>
        </ContentContainer>
      ) : (
        <Loader />
      )}
    </GamePageStyled>
  );
};

const GamePageStyled = styled.div`
  overflow: hidden;
  height: 100%;
  min-height: 400px;

  & > span {
    margin: 1rem auto;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    width: 100%;
    max-width: 100%;
  }
`;

const ContentContainer = styled.div`
  & > div {
    width: 100%;
    margin-bottom: 20px;

    & > span {
      color: #535353;
    }
  }
`;

const LinkSiteGame = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: block;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
