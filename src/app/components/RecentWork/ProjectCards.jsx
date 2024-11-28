import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import ProjectImageCarousel from '../../common-components/Carousels/ProjectCarousel';
import CustomButton from '../../common-components/CustomButton';
import { truckSvg } from '../../assets/svgs/truck';
import { motion } from 'framer-motion';

const Card = styled(Grid)`
  width: 100%;
  justify-content: space-around;
  gap: 14px;
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 17px 0;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #02c6b3;
  background-color: #02c6b315;
  padding: 2px 8px;
  border-radius: 10px;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: 600;
  color: #c8c8c8;
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 14px;
  margin-left: 2px;
  font-weight: 400;
  color: #c8c8c899;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  font-weight: 400;
  color: #c8c8c8;
  overflow: hidden;
  margin-top: 8px;
  font-size: 14px;
  text-align: justify;
  line-height: 20px;
`;

const ProjectCards = ({ project, setOpenModal, even }) => {
  return (
    <motion.div key={project.id} className={`project_card-${project.id}`}>
      <Card container xs={12} rowGap={5}>
        {!even && (
          <Grid item xs={12} md={6}>
            <ProjectImageCarousel images={project.images} />
          </Grid>
        )}
        <Grid item xs={12} md={5}>
          <Details>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Description>{project.description}</Description>
          </Details>
          <Tags>
            {project.tags?.map((tag, index) => (
              <Tag>{tag}</Tag>
            ))}
          </Tags>

          {project?.href && (
            <CustomButton
              svg={truckSvg}
              text={'Visit Website'}
              height={25}
              width={120}
              fontSize={'11px'}
              fontWeight={300}
            />
          )}
        </Grid>
        {even && (
          <Grid item xs={12} md={6}>
            <ProjectImageCarousel images={project.images} />
          </Grid>
        )}
      </Card>
    </motion.div>
  );
};

export default ProjectCards;
