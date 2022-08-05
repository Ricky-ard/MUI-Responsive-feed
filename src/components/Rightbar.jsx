import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar
            alt="Remy Sharp"
            src="https://source.unsplash.com/random/?human,man"
          />
          <Avatar
            alt="Travis Howard"
            src="https://source.unsplash.com/random/?human,girl"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://source.unsplash.com/random/?kid"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://source.unsplash.com/random/?human,old"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://source.unsplash.com/random/?human"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://source.unsplash.com/random/?human,animal"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://source.unsplash.com/random/?human,food"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://source.unsplash.com/random/?human,anime"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://source.unsplash.com/random/?human"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://source.unsplash.com/random/?human"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/300×300/?camera"
              alt="gambar"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/300×300/?camera"
              alt="gambar"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/300×300/?camera"
              alt="gambar"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/300×300/?camera"
              alt="gambar"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/300×300/?camera"
              alt="gambar"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://source.unsplash.com/random/300×300/?camera"
              alt="gambar"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
