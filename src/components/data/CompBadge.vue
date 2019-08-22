<template>
  <div class="badge">
    <div class="sample">
      <h2>Basic Badge</h2>
      <el-badge :value="12" class="item">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">replies</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">replies</el-button>
      </el-badge>

      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          Click Me
          <i class="el-icon-caret-bottom el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            comments
            <el-badge class="mark" :value="12"></el-badge>
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            replies
            <el-badge class="mark" :value="3"></el-badge>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <div class="sample">
      <h2>Max Value</h2>
      <el-badge :value="200" :max="99" class="item">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">replies</el-button>
      </el-badge>
    </div>

    <div class="sample">
      <h2>Customizations</h2>
      <el-badge value="new" class="item">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge value="hot" class="item">
        <el-button size="small">replies</el-button>
      </el-badge>
    </div>

    <div class="sample">
      <h2>Little red dot</h2>
      <el-badge is-dot class="item">query</el-badge>
      <el-badge is-dot class="item">
        <el-button class="share-button" icon="el-icon-share" type="primary"></el-button>
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Badge',
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
