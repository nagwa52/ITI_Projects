<?php

  namespace php_lab1\Test;

  use PHPUnit\Framework\TestCase;

  include("Factorial.php");

  class FactTest extends TestCase
  {
    public function test_fact_0(){
      self::assertEquals(1, fact(0));
    }

    public function test_fact_One(){
      self::assertEquals(1, fact(1));
    }
    public function test_fact_5(){
      self::assertEquals(120, fact(5));
    }
    public function test_fact_rand(){
      $rand = 5;
      $value = 5 * 4 * 3 * 2;
      self::assertEquals($value, fact($rand));
    }
    public function test_fact_negative3(){
      self::assertNull(fact(-3));
    }
    public function test_fact_OnePointFive(){
      self::assertNull(fact(1.5));
    }
    public function test_fact_false(){
      self::assertNull(fact(false));
    }
    public function test_fact_String(){
      self::assertNull(fact("abc"));
    }
  }

