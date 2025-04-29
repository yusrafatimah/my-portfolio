import { Grid } from '@mui/material';
import React from 'react';
import ProjectImageCarousel from '../../common-components/Carousels/ProjectCarousel';
import CustomButton from '../../common-components/CustomButton';
import { truckSvg } from '../../assets/svgs/truck';
import { motion } from 'framer-motion';
import { Card, Date, Description, Details, Tag, Tags, Title } from './styles';

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
              type={'heroButton'}
              height={25}
              width={120}
              fontSize={'11px'}
              fontWeight={300}
              url={project?.href}
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
