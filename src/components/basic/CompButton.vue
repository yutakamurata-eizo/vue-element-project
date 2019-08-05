<template>
  <div class="button">
    <div class="sample">
      <h2>Basic Button</h2>
      <el-row>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
      <el-row>
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>
      <el-row>
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>
      <el-row>
        <el-button round plain>Round Plain</el-button>
        <el-button type="primary" round plain>Primary</el-button>
        <el-button type="success" round plain>Success</el-button>
        <el-button type="info" round plain>Info</el-button>
        <el-button type="warning" round plain>Warning</el-button>
        <el-button type="danger" round plain>Danger</el-button>
      </el-row>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>

    <div class="sample">
      <h2>Disabled Button</h2>
      <el-row>
        <el-button disabled>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
      </el-row>
      <el-row>
        <el-button plain disabled>Plain</el-button>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="info" plain disabled>Info</el-button>
        <el-button type="warning" plain disabled>Warning</el-button>
        <el-button type="danger" plain disabled>Danger</el-button>
      </el-row>
    </div>

    <div class="sample">
      <h2>Text Button</h2>
      <el-row>
        <el-button type="text">Text Button</el-button>
        <el-button type="text" disabled>Text Button</el-button>
      </el-row>
    </div>

    <div class="sample">
      <h2>Icon Button</h2>
      <el-row>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">Search</el-button>
        <el-button type="primary">Upload <i class="el-icon-upload el-icon-right"></i></el-button>
      </el-row>
    </div>

    <div class="sample">
      <h2>Button Group</h2>
      <el-row>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
          <el-button type="primary">Next Page <i class="el-icon-arrow-right el-icon-right"></i></el-button>
        </el-button-group>
        <el-button-group style="margin-left: 30px;">
          <el-button type="primary" icon="el-icon-edit"></el-button>
          <el-button type="primary" icon="el-icon-share"></el-button>
          <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </el-row>
    </div>

    <div class="sample">
      <h2>Loading Button</h2>
      <el-row>
        <el-button type="primary" :loading="true">Loading</el-button>
      </el-row>
    </div>

    <div class="sample">
      <h2>Button Sizes</h2>
      <el-row>
        <el-button>Default</el-button>
        <el-button size="medium">Medium</el-button>
        <el-button size="small">Small</el-button>
        <el-button size="mini">Mini</el-button>
      </el-row>
      <el-row>
        <el-button round>Default</el-button>
        <el-button size="medium" round>Medium</el-button>
        <el-button size="small" round>Small</el-button>
        <el-button size="mini" round>Mini</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button',
}
</script>

<style>
.sample {
  margin-top: 40px;
  padding: 0 20px 20px;
  border: #ddd solid 1px;
  border-radius: 4px;
}
.sample:first-child {
  margin-top: 0;
}
</style>
